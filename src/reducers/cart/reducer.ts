import { CoffeesCartType } from '../../contexts/CartContext'
import { ActionTypes } from './actions'

function findCoffeeIndexInCart(cart: CoffeesCartType[], id: string) {
  return cart.findIndex((coffee) => coffee.id === id)
}

export function cartReducer(state: CoffeesCartType[], action: any) {

  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const { id } = action.payload.coffee

      const coffeeIndex = findCoffeeIndexInCart(state, id)

      if (coffeeIndex < 0) {
        const newCoffee: CoffeesCartType = {
          ...action.payload.coffee,
          quantity: action.payload.quantity,
        }

        return [...state, newCoffee]
      } else {
        return state.map((coffee) => coffee.id === id
          ? { ...coffee, quantity: action.payload.quantity }
          : coffee)
      }
    }

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      return state.filter((coffee) => coffee.id !== action.payload.id)
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      return state.map((coffee) => coffee.id === action.payload.id
        ? { ...coffee, quantity: coffee.quantity + 1 }
        : coffee)
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      return state.map((coffee) => coffee.id === action.payload.id
        ? {
          ...coffee, quantity: coffee.quantity > 1
            ? coffee.quantity - 1
            : 1
        }
        : coffee)
    }

    default:
      return state
  }
}
