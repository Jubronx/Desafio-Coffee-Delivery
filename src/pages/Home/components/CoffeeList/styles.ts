import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 19.375rem;
  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
`
export const CoffeeImage = styled.div`
  height: 7.5rem;
  width: 7.5rem;
  margin: -1.5625rem auto 0 auto;
  img {
    width: 100%;
  }
`
export const TagContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`
export const Tag = styled.span`
  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-900']};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin-top: 0.75rem;
`
export const CoffeeName = styled.span`
  width: 13.5rem;
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1.25rem;
`
export const CoffeeDescription = styled.span`
  width: 13.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  line-height: 1.125rem;
`
export const BuyContent = styled.div`
  display: flex;
  width: 13.5rem;
  gap: 23px;
  margin-top: 2.0625rem;
`
export const PriceCoffee = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  span {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-900']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
