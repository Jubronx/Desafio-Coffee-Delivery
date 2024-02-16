import { ReactNode, createContext, useState } from 'react'
import { InfoOrder } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'

export interface Item {
  id: string
  quantity: number
}
interface newOrder extends InfoOrder{
  id: number
  item: Item[]
}
interface CartContextType {
  cart: Item[]
  order: newOrder[]
  addNewItem: (data: Item) => void
  incrementQuantity: (itemId: Item['id']) => void
  decrementQuantity: (itemId: Item['id']) => void
  deleteCoffeeInCart: (itemId: Item['id']) => void
  checkoutCart: (data: InfoOrder) => void
}
interface CartContextProviderProps {
  children: ReactNode
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])
  const [order, setOrder] = useState<newOrder[]>([])
  const navigate = useNavigate();
  function addNewItem(data: Item) {
    const newItem: Item = {
      id: data.id,
      quantity: data.quantity,
    }
    const itemAlreadyAdded = cart.find((item) => item.id === data.id)
    if (itemAlreadyAdded) {
      setCart(
        cart.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              quantity: (itemAlreadyAdded.quantity += data.quantity),
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setCart((state) => [...state, newItem])
    }
  }
  function checkoutCart(data: InfoOrder){
    const addnewOrder: newOrder ={
      id: new Date().getTime(),
      item: [...cart],
      cep: data.cep,
      rua: data.rua,
      complemento: data.complemento,
      cidade: data.cidade,
      bairro: data.bairro,
      formaPagamento: data.formaPagamento,
      number: data.number,
      uf: data.uf
    }
    setOrder((state)=>[...state, addnewOrder])
    navigate('/Success')
  }
  function deleteCoffeeInCart(itemId: Item['id']){
    const itemsWithoutDeleteOne = cart.filter((item) => item.id != itemId)
    if(itemsWithoutDeleteOne){
      setCart(itemsWithoutDeleteOne)
    }
  }
  function incrementQuantity(itemId: Item['id']){
    const itemToIncrement = cart.find((item) => itemId === item.id)
    if(itemToIncrement){
      setCart(
        cart.map((item) => {
          if(item.id === itemId){
            return{
              ...item,
              quantity: itemToIncrement.quantity += 1,
            }
          }else{
            return item
          }
        })
      )
    }
  }
  function decrementQuantity(itemId: Item['id']){
    const itemToDecrement = cart.find((item) => itemId === item.id)
    if(itemToDecrement?.id && itemToDecrement.quantity > 1){
      setCart(
        cart.map((item) => {
          if(item.id === itemId){
            return{
              ...item,
              quantity: itemToDecrement.quantity -= 1,
            }
          }else{
            return item
          }
        })
      )
    }
  }

  return (
    <CartContext.Provider value={{ addNewItem, cart, incrementQuantity, decrementQuantity, deleteCoffeeInCart, checkoutCart, order}}>
      {children}
    </CartContext.Provider>
  )
}
