import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { QuantityControls } from '../../../../components/Card/styles'

import {
  CoffeeControls,
  CoffeeDetails,
  CoffeeImage,
  CoffeeItemContent,
  CoffeeListItem,
  CoffeePrice,
  DivisionLine,
  RemoveCoffeeButton
} from './styles'

export function CoffeeItem() {
  return (
    <>
      <CoffeeListItem>
        <CoffeeItemContent>
          <CoffeeImage
            src="/images/coffees/americano.png"
            alt=""
          />

          <CoffeeDetails>
            <h3>Expresso Tradicional</h3>

            <CoffeeControls>
              <QuantityControls>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>

                <button>
                  <Plus size={14} />
                </button>
              </QuantityControls>

              <RemoveCoffeeButton>
                <span>
                  <Trash size={16} />
                </span>
                
                Remover
              </RemoveCoffeeButton>
            </CoffeeControls>
          </CoffeeDetails>
        </CoffeeItemContent>

        <CoffeePrice>R$ 9,90</CoffeePrice>
      </CoffeeListItem>

      <DivisionLine />
    </>
  )
}
