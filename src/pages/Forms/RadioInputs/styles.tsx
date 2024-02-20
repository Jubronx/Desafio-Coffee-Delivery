import styled from "styled-components";

const BaseButton = styled.label`
  all: unset;
  display: flex;
  padding: 12px;
  align-items: center;
  cursor:pointer;
  gap: 4px;
  width: 8.75rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme['purple-900']};
  }
  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
  @media screen and (max-width: 900px){
    width: 300px;
    margin: 0 auto;
  }
`
export const Container = styled(BaseButton)`
    &[data-estado='true']{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-900']};
        background-color: ${(props) => props.theme['purple-300']};
    }
    input{
        display: none;
    }
    @media screen and (max-width: 900px){
     padding: 10px;
    }
`