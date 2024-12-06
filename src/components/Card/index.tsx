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

interface CoffeesProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  imageURL: string
}

export function Card({
  id,
  title,
  description,
  tags,
  price,
  imageURL
}: CoffeesProps) {

  function showId() {
    console.log(id)
  }

  return (
    <CoffeeCard>
      <ImageCoffee
        src={imageURL}
        alt=""
      />

      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>
            {tag}
          </TagItem>
        ))}
      </TagList>

      <Title>{title}</Title>

      <Description>
        {description}
      </Description>


      <PriceAndControls>
        <Price>R$ <span>{price.toFixed(2)}</span></Price>

        <Controls>
          <QuantityControls>
            <button>
              <Minus size={14} />
            </button>

            <span>1</span>

            <button>
              <Plus size={14} />
            </button>
          </QuantityControls>

          <AddToCartButton onClick={showId}>
            <ShoppingCart size={20} weight='fill' />
          </AddToCartButton>
        </Controls>
      </PriceAndControls>
    </CoffeeCard>
  )
}
