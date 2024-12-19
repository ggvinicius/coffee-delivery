import { CoffeesType } from '../../components/Card'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY',
  CLEAN_CART = 'CLEAN_CART'
}

export function addCoffeeToCartAction(coffee: CoffeesType, quantity: number) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART as ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
      quantity
    }
  }
}

export function removeCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART as
      ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id
    }
  }
}

export function incrementCoffeeQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY as
      ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}

export function decrementCoffeeQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY as
      ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART as ActionTypes.CLEAN_CART,
  }
}

export type CartActionType =
  | ReturnType<typeof addCoffeeToCartAction>
  | ReturnType<typeof removeCoffeeFromCartAction>
  | ReturnType<typeof incrementCoffeeQuantityAction>
  | ReturnType<typeof decrementCoffeeQuantityAction>
  | ReturnType<typeof cleanCartAction>
