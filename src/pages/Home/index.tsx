import {
  ContentCoffeeList,
  CoffeeListContainer,
  Title,
  ContentIcon,
  IconBackground,
  IconInfo,
  InfoHome,
  MainContainer,
  TextInfo,
} from './styles'
import ImagemHome from '../../assets/ImagemHome.svg'
import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'
import { CoffeeList } from './components/CoffeeList'
import { coffees } from '../../data.json'

export function Home() {
  return (
    <MainContainer>
      <InfoHome>
        <TextInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <IconInfo>
            <ContentIcon>
              <IconBackground statusColor="yellowDark">
                <ShoppingCartSimple size={16} weight="fill" />
              </IconBackground>
              Compra simples e segura
            </ContentIcon>
            <ContentIcon>
              <IconBackground statusColor="gray">
                <Package size={16} weight="fill" />
              </IconBackground>
              Embalagem mantém o café intacto
            </ContentIcon>
            <ContentIcon>
              <IconBackground statusColor="yellow">
                <Timer size={16} weight="fill" />
              </IconBackground>
              Entrega rápida e rastreada
            </ContentIcon>
            <ContentIcon>
              <IconBackground statusColor="purple">
                <Coffee size={16} weight="fill" />
              </IconBackground>
              O café chega fresquinho até você
            </ContentIcon>
          </IconInfo>
        </TextInfo>
        <img src={ImagemHome} alt="Imagem Home" />
      </InfoHome>
      <ContentCoffeeList>
        <Title>Nossos cafés</Title>
        <CoffeeListContainer>
          {coffees.map((coffee) => {
            return <CoffeeList key={coffee.id} coffee={coffee} />
          })}
        </CoffeeListContainer>
      </ContentCoffeeList>
    </MainContainer>
  )
}
