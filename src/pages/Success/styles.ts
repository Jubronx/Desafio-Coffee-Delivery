import styled from "styled-components";

export const ContainerSuccess = styled.div`
    display: flex;
    justify-content: center;
    gap: 102px;
    align-items: center;
    margin-top: 80px;
    @media screen and (max-width: 900px){
        flex-direction: column;
        width: 95%;
        margin: 10px auto auto;
        gap: 20px;
        img{
            width: 100%;
        }
    }
`

export const TituloSuccess = styled.div`
    display:flex;
    flex-direction: column;
`
export const Title = styled.h2`
  font-size: 2rem;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  line-height: 3.9rem;
  color: ${(props)=> props.theme[`yellow-900`]};
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 526px;
    height: 296px;
    border: 2px solid ${(props)=> props.theme[`purple-900`]};
    border-radius: 7px 38px;
    padding: 10px;
    gap: 20px;  
    justify-content: center;
    @media screen and (max-width: 900px){
        width:100%;
    }
`
export const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const OrderInfo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    height: auto;
    div{
        display: flex;
        flex-direction: column;
    }
    span:nth-child(2){
        font-weight: bold;
        text-transform: capitalize;
    }
`
export const IconAddress = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;
    background-color: ${(props)=> props.theme[`purple-900`]};
    justify-content: center;
    color: white;
    width: 32px;
    height: 32px;
`
export const IconClock = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;
    background-color: ${(props)=> props.theme[`yellow-500`]};
    justify-content: center;
    color: white;
    width: 32px;
    height: 32px;
`
export const IconDollar = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;
    background-color: ${(props)=> props.theme[`yellow-900`]};
    justify-content: center;
    color: white;
    width: 32px;
    height: 32px;


`