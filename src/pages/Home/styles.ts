import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const InfoHome = styled.div`
  display: flex;
  padding: 5.75rem 0;
  justify-content: space-between;
  @media screen and (max-width: 900px){
    width: 100%;
    flex-wrap: wrap;
    gap: 17px;
    padding: 40px 10px 10px;
    img{
      width: 100%;
    }
  }
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.875rem;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    line-height: 3.9rem;
  }
  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
  @media screen and (max-width: 900px){
    width: 100%;
    h1{
      line-height: 2rem;
      font-size: 2rem;
    }
  }
`
export const ContentCoffeeList = styled.main`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px){
    h2{
      text-align: center;
    }
  }
`
export const CoffeeListContainer = styled.div`
  display: flex;
  margin-top: 3.375rem;
  gap: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width: 900px){
    justify-content: center;
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
export const IconInfo = styled.div`
  display: grid;
  grid-template-columns: 231px 294px;
  gap: 20px 40px;
  margin-top: 3.125rem;
  @media screen and (max-width: 900px){
    display:flex;
    flex-wrap: wrap;
    margin-top: 0;
  }
`
export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
`
const STATUS_COLOR = {
  yellowDark: 'yellow-900',
  yellow: 'yellow-500',
  gray: 'base-text',
  purple: 'purple-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}
export const IconBackground = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`
