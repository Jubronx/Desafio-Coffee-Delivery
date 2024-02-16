import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import {
  CoffeeCard,
  CoffeeImage,
  TagContent,
  Tag,
  CoffeeName,
  CoffeeDescription,
  BuyContent,
  PriceCoffee,
  Actions,
  Cart,
} from './styles'

import { QuantityInput } from '../../../Forms/QuantityInput'
import { CartContext } from '../../../../contexts/CartContext'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeList({ coffee }: Props) {
  const priceCoffee = coffee.price
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const priceCoffeeFormated = priceCoffee.toLocaleString('pt-Br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const { addNewItem } = useContext(CartContext)
  const idCoffee = coffee.id

  function handleAddItem() {
    addNewItem({ id: idCoffee, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }
  function handleCounterPlus() {
    setQuantity((state) => state + 1)
  }
  function handleCounterMinus() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])
  return (
    <CoffeeCard>
      <CoffeeImage>
        <img src={`/${coffee.image}`} alt="" />
      </CoffeeImage>
      <TagContent>
        {coffee.tags.map((tag, index) => (
          <Tag key={index}> {tag} </Tag>
        ))}
      </TagContent>
      <CoffeeName>{coffee.title}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <BuyContent>
        <PriceCoffee>
          R$
          <span> {priceCoffeeFormated}</span>
        </PriceCoffee>
        <Actions>
          <QuantityInput
            quantity={quantity}
            handleCounterMinus={handleCounterMinus}
            handleCounterPlus={handleCounterPlus}
          />
          {isItemAdded ? (
            <Cart disabled={isItemAdded}>
              <CheckFat weight="fill" size={22} />
            </Cart>
          ) : (
            <Cart onClick={handleAddItem}>
              <ShoppingCartSimple type="submit" size={22} weight="fill" />
            </Cart>
          )}
        </Actions>
      </BuyContent>
    </CoffeeCard>
  )
}
