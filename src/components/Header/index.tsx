import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'

import {
  Aside,
  CartCounter,
  HeaderContainer,
  Localization
} from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logoCoffee} alt="" title='Coffee Delivery'/>
      </NavLink>

      <Aside>
        <Localization>
          <MapPin size={22} weight='fill' />
          <span>São Paulo, SP</span>
        </Localization>

        <NavLink to='/checkout'>
          <CartCounter>3</CartCounter>
          <ShoppingCart size={22} weight='fill' />
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}
