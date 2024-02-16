import styled from 'styled-components'

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
