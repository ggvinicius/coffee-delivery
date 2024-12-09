import { CoffeesCartType } from '../../contexts/CartContext'
import { ActionTypes, CartActionType } from './actions'

import { produce } from 'immer'

function findCoffeeIndexInCart(cart: CoffeesCartType[], id: string) {
  return cart.findIndex((coffee) => coffee.id === id)
}

export function cartReducer(state: CoffeesCartType[], action: CartActionType) {

  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeIndex = findCoffeeIndexInCart(state, action.payload.coffee.id)

      if (coffeeIndex < 0) return produce(state, (draft) => {
        draft.push({
          ...action.payload.coffee,
          quantity: action.payload.quantity
        })
      })

      return produce(state, (draft) => {
        draft[coffeeIndex].quantity = action.payload.quantity
      })
    }

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const coffeeIndex = findCoffeeIndexInCart(state, action.payload.id)

      if (coffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft.splice(coffeeIndex, 1)
      })
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      const coffeeIndex = findCoffeeIndexInCart(state, action.payload.id)

      if (coffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[coffeeIndex].quantity += 1
      })
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      const coffeeIndex = findCoffeeIndexInCart(state, action.payload.id)

      if (coffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[coffeeIndex].quantity =
          Math.max(1, draft[coffeeIndex].quantity - 1)
      })
    }

    default:
      return state
  }
}
