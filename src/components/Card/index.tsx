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

export function Card() {
  return (
    <CoffeeCard>
      <ImageCoffee
        src="/images/coffees/americano.png"
        alt=""
      />


      <TagList>
        <TagItem>TRADICIONAL</TagItem>
        <TagItem>TRADICIONAL</TagItem>
      </TagList>

      <Title>Expresso Americano</Title>

      <Description>
        Expresso diluído, menos intenso que o tradicional
      </Description>


      <PriceAndControls>
        <Price>R$ <span>9,90</span></Price>

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

          <AddToCartButton>
            <ShoppingCart size={20} weight='fill' />
          </AddToCartButton>
        </Controls>
      </PriceAndControls>
    </CoffeeCard>
  )
}
