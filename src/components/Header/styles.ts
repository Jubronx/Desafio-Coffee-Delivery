import styled from 'styled-components'

export const HeaderContainer = styled.head`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    gap: 10px;
    a {
      background-color: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-900']};
      width: 2.375rem;
      height: 2.375rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      cursor: pointer;
      span {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['yellow-900']};
        position: absolute;
        top: -10px;
        right: -7px;
        border-radius: 50%;
        width: 1.25rem;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`
export const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  width: 8.9375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-900']};
`
