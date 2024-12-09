import { CoffeesType } from '../../components/Card'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY'
}

export function addCoffeeToCartAction(coffee: CoffeesType, quantity: number) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
      quantity
    }
  }
}

export function removeCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id
    }
  }
}

export function incrementCoffeeQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}

export function decrementCoffeeQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}
