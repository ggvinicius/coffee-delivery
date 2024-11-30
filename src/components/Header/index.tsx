import logoCoffee from '../../assets/logo.svg'
import {
  CartButton,
  CartCounter,
  HeaderContainer,
  LocalizationButton
} from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" title='Coffee Delivery'/>

      <div>
        <LocalizationButton>
          <MapPin size={22} weight='fill' />
          <span>São Paulo, SP</span>
        </LocalizationButton>

        <CartButton>
          <CartCounter>3</CartCounter>
          <ShoppingCart size={22} weight='fill' />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
