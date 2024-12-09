import { createContext, ReactNode, useReducer } from 'react'
import { CoffeesType } from '../components/Card'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeToCartAction,
  decrementCoffeeQuantityAction,
  incrementCoffeeQuantityAction,
  removeCoffeeFromCartAction
} from '../reducers/cart/actions'

export interface CoffeesCartType {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: CoffeesCartType[]
  addCoffeeToCart: (coffee: CoffeesType, quantity: number) => void
  removeCoffeeFromCart: (id: string) => void
  incrementCoffeeQuantity: (id: string) => void
  decrementCoffeeQuantity: (id: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  function addCoffeeToCart(coffee: CoffeesType, quantity: number) {
    dispatch(addCoffeeToCartAction(coffee, quantity))
  }

  function removeCoffeeFromCart(id: string) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function incrementCoffeeQuantity(id: string) {
    dispatch(incrementCoffeeQuantityAction(id))
  }

  function decrementCoffeeQuantity(id: string) {
    dispatch(decrementCoffeeQuantityAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
