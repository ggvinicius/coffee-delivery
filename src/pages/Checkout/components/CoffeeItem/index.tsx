import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { QuantityControls } from '../../../../components/Card/styles'

import {
  CoffeeControls,
  CoffeeDetails,
  CoffeeImage,
  CoffeeItemContent,
  CoffeeListItem,
  CoffeePrice,
  DivisionLine,
  RemoveCoffeeButton
} from './styles'
import { useContext } from 'react'
import { CartContext, CoffeesCartType } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffee: CoffeesCartType
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const {
    removeCoffeeFromCart,
    incrementCoffeeQuantity,
    decrementCoffeeQuantity
  } = useContext(CartContext)

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffee.id)
  }

  function handleIncrementCoffeeQuantity() {
    incrementCoffeeQuantity(coffee.id)
  }

  function handleDecrementCoffeeQuantity() {
    decrementCoffeeQuantity(coffee.id)
  }

  return (
    <>
      <CoffeeListItem>
        <CoffeeItemContent>
          <CoffeeImage
            src={coffee.image}
            alt=""
          />

          <CoffeeDetails>
            <h3>{coffee.title}</h3>

            <CoffeeControls>
              <QuantityControls>
                <button onClick={handleDecrementCoffeeQuantity}>
                  <Minus size={14} />
                </button>

                <span>{coffee.quantity}</span>

                <button onClick={handleIncrementCoffeeQuantity}>
                  <Plus size={14} />
                </button>
              </QuantityControls>

              <RemoveCoffeeButton onClick={handleRemoveCoffeeFromCart}>
                <span>
                  <Trash size={16} />
                </span>

                Remover
              </RemoveCoffeeButton>
            </CoffeeControls>
          </CoffeeDetails>
        </CoffeeItemContent>

        <CoffeePrice>R$ {coffee.price.toFixed(2)}</CoffeePrice>
      </CoffeeListItem>

      <DivisionLine />
    </>
  )
}
