import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext' 
import {MapPin, Clock, CurrencyDollar} from '@phosphor-icons/react'
import  Illustration  from '../../assets/Illustration.svg'
import { ContainerSuccess, ContainerInfo, TituloSuccess, Title, ContainerOrder, OrderInfo, IconAddress, IconClock, IconDollar} from './styles'
export function Success() {
  const {order} = useContext(CartContext)
  return(
    <ContainerSuccess>
      <ContainerOrder>
        <TituloSuccess>
          <Title>Uhu! Pedido confirmado</Title>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </TituloSuccess>
        {
          order.map((orderItem)=>{
            return(
              <>
                <ContainerInfo>
                  <OrderInfo>
                    <IconAddress>
                      <MapPin weight="fill" size={16}/> 
                    </IconAddress>                             
                    <div>
                      <span>Entrega em {orderItem.rua}, {orderItem.number}</span>
                      <span>{orderItem.cidade} - {orderItem.uf}</span>
                    </div>
                  </OrderInfo>
                  <OrderInfo>
                    <IconClock>
                      <Clock weight="fill" size={16}/> 
                    </IconClock>                             
                    <div>
                      <span>Previsao de entrega</span>
                      <span>20 min - 30 min</span>
                    </div>
                  </OrderInfo>
                  <OrderInfo>
                    <IconDollar>
                      <CurrencyDollar weight="fill" size={16}/> 
                    </IconDollar>                             
                    <div>
                      <span>Pagamento na entrega</span>
                      <span>{orderItem.formaPagamento}</span>
                    </div>
                  </OrderInfo>
                </ContainerInfo>
                
              </> 
                )
            })
        }
      </ContainerOrder>
      <img src={Illustration}/>
    </ContainerSuccess>
  )
}
