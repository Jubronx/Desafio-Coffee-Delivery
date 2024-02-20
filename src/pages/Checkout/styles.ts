import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 448px;
  margin-top: 4.5rem;
  gap: 2rem;
  @media screen and (max-width: 900px){
    width: 95%;
    margin: 10px auto auto;
    display: flex;
    flex-direction: column;
    h2{
      text-align: center;
    }
  }
`
export const DeliveryAddressContainer = styled.div`
`

export const AddressPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 2.5rem;
  .bloco{
    display: flex;
    gap: 0.625rem;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 900px){
    padding: 20px 20px;
    .bloco{
     flex-direction: column !important;
     width: 100%;
    
    }
  }
`
export const Title = styled.h2`
  font-size: 2rem;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  line-height: 3.9rem;
`
export const Info = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme['yellow-900']};
  }
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    color: ${(props) => props.theme['base-subtitle']};
  }
  span:nth-child(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const FormContent = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`
const BaseInput = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  @media screen and (max-width: 900px){
    width: 100% !important;
    margin: 0 auto;
  }
`
export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`
export const RuaInput = styled(BaseInput)`
  flex: 1;
`
export const NumberAndComplement = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;
  &::after {
    content: 'Optional';
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    right: 1.0625rem;
    line-height: 2.75rem;
  }
  &:focus-within::after {
    display: none;
  }
  @media screen and (max-width: 900px){
    flex-direction: column;
    &::after {
      position: absolute;
      bottom: 0;
    }
  }
`
export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementInput = styled(BaseInput)`
  flex: 1;
`
export const BairroCidadeUf = styled.div`
  display: flex;
  gap: 0.75rem;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`
export const BairroInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CidadeInput = styled(BaseInput)`
  width: 17.25rem;
`
export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`
export const CoffeeSelectedContent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: 6px 44px;
  padding: 0 2.5rem;
  width: 30.25rem;
  @media screen and (max-width: 900px){
    width: 100% !important;
    margin: 0 auto;
  }
`
export const CoffeeSelectedCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }
  @media screen and (max-width: 900px){
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
`
export const CoffeeAndDetails = styled.div`
  display: flex;
  gap: 1.25rem;

`
export const CoffeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  
`
export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  
`
export const Counter = styled.div`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.4375rem;
  width: 4.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-900']};
    width: 0.875rem;
    height: 0.875rem;
  }
`
export const RemoveCoffee = styled.button`
  display: flex;
  padding: 12px;
  align-items: center;
  height: 2.4375rem;
  gap: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  cursor: pointer;
  svg {
    color: ${(props) => props.theme['purple-900']};
  }
  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
  }
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
export const CoffeeSelectedTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
`
export const TotalItens = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Entrega = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1.25rem;
  }
`

export const ButtonConfirmOrder = styled.button`
  display: flex;
  padding: 12px 8px;
  margin-bottom: 2.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
`
export const ErrorMessage = styled.p`
    font-weight: bold;
    color: red;
    `