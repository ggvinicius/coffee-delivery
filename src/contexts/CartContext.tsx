import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeesType } from '../components/Card'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeToCartAction,
  cleanCartAction,
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
  clearCart: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], (initialValue) => {
    const storedStateAsJSON =
      localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

      return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initialValue
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cart])

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

  function clearCart() {
    dispatch(cleanCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
