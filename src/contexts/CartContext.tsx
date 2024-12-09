import { createContext, ReactNode, useState } from 'react'
import { CoffeesType } from '../components/Card'

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
  const [cart, setCart] = useState<CoffeesCartType[]>([])

  function findCoffeeIndexInCart(id: string) {
    return cart.findIndex((coffee) => coffee.id === id)
  }

  function addCoffeeToCart(coffee: CoffeesType, quantity: number) {
    const { id } = coffee

    const coffeeIndex = findCoffeeIndexInCart(id)

    const newCoffee: CoffeesCartType = {
      ...coffee,
      quantity,
    }

    if (coffeeIndex >= 0) {
      setCart((state) =>
        state.map((coffee) =>
          coffee.id === id
            ? { ...coffee, quantity }
            : coffee
        )
      )
    } else {
      setCart((state) => [...state, newCoffee])
    }
  }

  function removeCoffeeFromCart(id: string) {
    const coffeeIndex = findCoffeeIndexInCart(id)

    if (coffeeIndex >= 0) {
      setCart((state) => state.filter((coffee) => coffee.id !== id))
    }
  }

  function incrementCoffeeQuantity(id: string) {
    const coffeeIndex = findCoffeeIndexInCart(id)

    if (coffeeIndex >= 0) {
      setCart((state) =>
        state.map((coffee) =>
          coffee.id === id
            ? { ...coffee, quantity: coffee.quantity + 1 }
            : coffee
        )
      )
    }
  }

  function decrementCoffeeQuantity(id: string) {
    const coffeeIndex = findCoffeeIndexInCart(id)

    if (coffeeIndex >= 0) {
      setCart((state) =>
        state.map((coffee) =>
          coffee.id === id
            ? {
              ...coffee,
              quantity: coffee.quantity > 1 ? coffee.quantity - 1 : 1,
            }
            : coffee
        )
      )
    }
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
