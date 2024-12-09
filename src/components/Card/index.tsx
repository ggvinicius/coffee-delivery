import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCartButton,
  CoffeeCard,
  Controls,
  Description,
  ImageCoffee,
  Price,
  PriceAndControls,
  QuantityControls,
  TagItem,
  TagList,
  Title
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export interface CoffeesType {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CoffeeCardProps {
  coffee: CoffeesType
}

export function Card({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  function handleAddCoffeeToCart() {
    addCoffeeToCart(coffee, quantity)
  }

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    setQuantity((state) => state <= 1 ? state : state - 1)
  }

  return (
    <CoffeeCard>
      <ImageCoffee
        src={coffee.image}
        alt=""
      />

      <TagList>
        {coffee.tags.map((tag, index) => (
          <TagItem key={index}>
            {tag}
          </TagItem>
        ))}
      </TagList>

      <Title>{coffee.title}</Title>

      <Description>
        {coffee.description}
      </Description>


      <PriceAndControls>
        <Price>R$ <span>{coffee.price.toFixed(2)}</span></Price>

        <Controls>
          <QuantityControls>
            <button onClick={handleDecrementQuantity}>
              <Minus size={14} />
            </button>

            <span>{quantity}</span>

            <button onClick={handleIncrementQuantity}>
              <Plus size={14} />
            </button>
          </QuantityControls>

          <AddToCartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={20} weight='fill' />
          </AddToCartButton>
        </Controls>
      </PriceAndControls>
    </CoffeeCard>
  )
}
