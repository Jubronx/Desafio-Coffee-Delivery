import { Minus, Plus } from '@phosphor-icons/react'
import { Counter } from './style.ts'
type Props = {
  quantity: number
  handleCounterMinus: () => void
  handleCounterPlus: () => void
}

export function QuantityInput({
  quantity,
  handleCounterMinus,
  handleCounterPlus,
}: Props) {
  return (
    <Counter>
      <Minus onClick={handleCounterMinus} size={32} />
      {quantity}
      <Plus onClick={handleCounterPlus} size={32} />
    </Counter>
  )
}
