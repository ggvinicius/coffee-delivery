import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'

import {
  Aside,
  CartCounter,
  HeaderContainer,
  Localization
} from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const totalCoffeesInCart = cart.length

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logoCoffee} alt="" title='Coffee Delivery' />
      </NavLink>

      <Aside>
        <Localization>
          <MapPin size={22} weight='fill' />
          <span>São Paulo, SP</span>
        </Localization>

        <NavLink to='/checkout'>
          {totalCoffeesInCart !== 0 &&
            <CartCounter>{totalCoffeesInCart}</CartCounter>}
          <ShoppingCart size={22} weight='fill' />
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}
