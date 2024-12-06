import {
  ConfirmationMessage,
  DeliveryImage,
  OrderDeliveryInfo,
  OrderInfo,
  OrderInfosWrapper,
  SuccessContainer
} from './styles'

import delivery from '../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <section>
        <ConfirmationMessage>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </ConfirmationMessage>

        <OrderInfosWrapper>
          <OrderInfo $backgroundColor='purple'>
            <span>
              <MapPin size={16} />
            </span>

            <OrderDeliveryInfo>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </OrderDeliveryInfo>
          </OrderInfo>

          <OrderInfo $backgroundColor='yellow'>
            <span>
              <Timer size={16} weight='fill' />
            </span>

            <OrderDeliveryInfo>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </OrderDeliveryInfo>
          </OrderInfo>

          <OrderInfo $backgroundColor='yellow-dark'>
            <span>
              <CurrencyDollar size={16} />
            </span>

            <OrderDeliveryInfo>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </OrderDeliveryInfo>
          </OrderInfo>
        </OrderInfosWrapper>
      </section>

      <DeliveryImage src={delivery} alt="" />
    </SuccessContainer>
  )
}
