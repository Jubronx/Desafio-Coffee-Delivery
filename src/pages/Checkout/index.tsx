import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext' 
import { coffees } from '../../../data.json'
import { QuantityInput } from '../Forms/QuantityInput'
import { Radio } from '../Forms/RadioInputs'
import { Bank, CreditCard, CurrencyDollar, Money, Trash, MapPinLine } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckoutContainer,
  AddressPaymentContainer,
  CoffeeSelectedContainer,
  DeliveryAddressContainer,
  Title,
  Info,
  FormContent,
  FormContainer, 
  TextInfo,
  CepInput,
  RuaInput,
  NumberInput,
  ComplementInput,
  NumberAndComplement,
  BairroCidadeUf,
  BairroInput,
  CidadeInput,
  UFInput,
  CoffeeSelectedContent,
  CoffeeSelectedCard,
  CoffeeSelectedTotal,
  ButtonConfirmOrder,
  CoffeDetails,
  CoffeeAndDetails,
  Actions,
  RemoveCoffee,
  PriceCoffee,
  TotalItens,
  Entrega,
  Total,
  ErrorMessage,
} from './styles'

type FormInputs = {
  cep: string
  rua: string
  number: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  formaPagamento: 'credito' | 'debito' | 'dinheiro'
}
const newOrder = z.object({
  cep: z.string().min(1, 'Informe o cep'),
  rua: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1,'Informe o número'),
  complemento: z.string().min(1, 'Informe o completento'),
  bairro: z.string().min(1, 'Informe o bairro'),
  cidade: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  formaPagamento: z.enum(['credito', 'debito', 'dinheiro'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type InfoOrder = z.infer<typeof newOrder>

export function Checkout() {
  const { cart, order, incrementQuantity, decrementQuantity, deleteCoffeeInCart, checkoutCart } = useContext(CartContext)
  const { register, watch, handleSubmit, formState: {errors}, reset}= useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const deliveryTax = 5.0

  const coffeesInCart = cart.map((item) => {
    const coffeeSelected = coffees.find((coffee) => coffee.id === item.id)
    if (!coffeeSelected) {
      throw new Error('Invalid coffee.')
    }
    return {
      ...coffeeSelected,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((amount, currentItem) => {
    return (amount += currentItem.price * currentItem.quantity)
  }, 0)

  function handleIncrementQuantity(itemId: string) {
    incrementQuantity(itemId)
  }

  function handleDecrementQuantity(itemId: string) {
    decrementQuantity(itemId)
  }

  function handleDeleteCoffeeInCart(itemId: string) {
    deleteCoffeeInCart(itemId)
  }
  function handleOrderCheckout(data:FormInputs){
    checkoutCart(data)
    reset()
  }

  // const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
  
  // }
  const radioSelected = watch('formaPagamento')

  return (
    <form onSubmit={handleSubmit(handleOrderCheckout)} id="order">
      <CheckoutContainer>
          <AddressPaymentContainer>
            <DeliveryAddressContainer>
              <Title>Complete seu pedido</Title>
              <FormContainer>
                <Info>
                  <MapPinLine size={32} />
                  <TextInfo>
                    <span> Endereço de Entrega </span>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                  </TextInfo>
                </Info>
                <FormContent>
                  <CepInput 
                    placeholder="Cep" 
                    {...register('cep', {required: true} )}
                  />
                  {errors.cep? (
                      <ErrorMessage role="alert">
                        {errors.cep.message}
                      </ErrorMessage>
                  ) : null}
                  <RuaInput 
                    placeholder="Rua" 
                    {...register('rua', {required: true})}
                  />
                  {errors.rua? (
                    <ErrorMessage role="alert">
                      {errors.rua.message}
                    </ErrorMessage>
                  ) : null}
                  <NumberAndComplement>
                    <NumberInput 
                      placeholder="Number" 
                      {...register('number')}
                    />
                    {errors.number? (
                      <ErrorMessage role="alert">
                        {errors.number.message}
                      </ErrorMessage>
                    ) : null}
                    <ComplementInput 
                      placeholder="Complemento" 
                      {...register('complemento')}
                      />
                    {errors.complemento? (
                      <ErrorMessage role="alert">
                        {errors.complemento.message}
                      </ErrorMessage>
                    ) : null}
                  </NumberAndComplement>
                  <BairroCidadeUf>
                    <BairroInput 
                      placeholder="Bairro" 
                      {...register('bairro')}
                    />
                    {errors.bairro? (
                      <ErrorMessage role="alert">
                        {errors.bairro.message}
                      </ErrorMessage>
                    ) : null}
                    <CidadeInput 
                      placeholder="Cidade" 
                      {...register('cidade')}
                    />
                    {errors.cidade? (
                      <ErrorMessage role="alert">
                        {errors.cidade.message}
                      </ErrorMessage>
                    ) : null}
                    <UFInput 
                      placeholder="Uf" 
                      {...register('uf')}
                    />
                    {errors.uf? (
                      <ErrorMessage role="alert">
                        {errors.uf.message}
                      </ErrorMessage>
                    ) : null}
                  </BairroCidadeUf>
                </FormContent>
              </FormContainer>
            </DeliveryAddressContainer>
            <FormContainer>
              <Info>
                <CurrencyDollar size={32} />
                <TextInfo>
                  <span> Pagamento</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </span>
                </TextInfo>
              </Info>
              <FormContent>
                <div className='bloco'>
                  <Radio
                    isSelected={radioSelected === 'credito'}
                    {...register('formaPagamento')}
                    value="credito"
                  >
                    <CreditCard />
                    <span>Cartão de crédito</span>
                  </Radio>
                  <Radio
                    isSelected={radioSelected === 'debito'}
                    {...register('formaPagamento')}
                    value="debito"
                  >
                    <Bank />
                    <span>Cartão de débito</span>
                  </Radio>
                  <Radio
                    isSelected={radioSelected === 'dinheiro'}
                    {...register('formaPagamento')}
                    value="dinheiro"
                  >
                    <Money />
                    <span>Dinheiro</span>
                  </Radio>
                </div>
              </FormContent>
            {errors.formaPagamento? (
                <ErrorMessage role="alert">
                  {errors.formaPagamento.message}
                </ErrorMessage>
            ) : null}
            </FormContainer>
          </AddressPaymentContainer>
      
        <CoffeeSelectedContainer>
          <Title>Cafés Selecionados</Title>
            <CoffeeSelectedContent>
              {coffeesInCart.map((coffee) => {
                const priceCoffee = coffee.price
                const coffeeTotal = priceCoffee * coffee.quantity
                const priceCoffeeFormated = coffeeTotal.toLocaleString('pt-Br', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                return (
                  <CoffeeSelectedCard key={coffee.id}>
                    <CoffeeAndDetails>
                      <img src={coffee?.image} alt="" />
                      <CoffeDetails>
                        <span>{coffee.title}</span>
                        <Actions>
                          <QuantityInput
                            quantity={coffee.quantity}
                            handleCounterMinus={() => handleDecrementQuantity(coffee.id)}
                            handleCounterPlus={ () => handleIncrementQuantity(coffee.id)}
                          />
                          <RemoveCoffee onClick={() => handleDeleteCoffeeInCart(coffee.id)}>
                            <Trash />
                            <span>remover</span>
                          </RemoveCoffee>
                        </Actions>
                      </CoffeDetails>
                    </CoffeeAndDetails>
                    <PriceCoffee>
                      <span>R${priceCoffeeFormated}</span>
                    </PriceCoffee>
                  </CoffeeSelectedCard>
                )
             
              })
              }
              <CoffeeSelectedTotal>
                <TotalItens>
                  <span>Total de itens</span>
                  <span>
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(totalItemsPrice)}
                  </span>
                </TotalItens>
                <Entrega>
                  <span>Entrega</span>
                  <span> R$ 5,00</span>
                </Entrega>
                <Total>
                  <h2>Total</h2>
                  <h2>
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(totalItemsPrice + deliveryTax)}
                  </h2>
                </Total>
              </CoffeeSelectedTotal>
              <ButtonConfirmOrder type="submit" form="order" >Confirmar Pedido</ButtonConfirmOrder>
            </CoffeeSelectedContent>
        </CoffeeSelectedContainer>
      </CheckoutContainer>
      {
      order.map((orderItem)=>{
        return(
          <span>{orderItem.cep}</span>
        )
      })
    }
    </form>
    
  )
}
