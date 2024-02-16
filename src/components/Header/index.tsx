import { HeaderContainer, LocationHeader } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const {cart} = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <LocationHeader>
          <MapPin weight="fill" />
          <span>São Paulo, SP</span>
        </LocationHeader>
        <NavLink to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
          <span>{cart.length}</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
