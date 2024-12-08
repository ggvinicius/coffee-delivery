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
  addCoffeeToCart: (id: string, coffee: CoffeesType, quantity: number) => void
  removeCoffeeToCart: (id: string) => void
  incrementCoffeeQuantity: (id: string) => void
  decrementCoffeeQuantity: (id: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CoffeesCartType[]>([])

  // Função auxiliar para encontrar o índice do café no carrinho
  function findCoffeeIndexInCart(id: string) {
    return cart.findIndex((coffee) => coffee.id === id)
  }

  function addCoffeeToCart(id: string, coffee: CoffeesType, quantity: number) {
    const coffeeIndex = findCoffeeIndexInCart(id)

    const newCoffee: CoffeesCartType = {
      ...coffee,
      quantity,
    }

    if (coffeeIndex >= 0) {
      setCart((state) =>
        state.map((coffee) =>
          coffee.id === id
            ? { ...coffee, quantity: coffee.quantity + quantity }
            : coffee
        )
      )
    } else {
      setCart((state) => [...state, newCoffee])
    }
  }

  function removeCoffeeToCart(id: string) {
    const coffeeIndex = findCoffeeIndexInCart(id)

    if (coffeeIndex >= 0) {
      setCart((state) => state.filter((coffee) => coffee.id !== id))
    } else {
      console.log(`Café com id ${id} não encontrado no carrinho.`)
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
        removeCoffeeToCart,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
