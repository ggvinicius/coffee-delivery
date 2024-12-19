import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
import { deliveryDetailsType } from '../Checkout'

export function Success() {
  const location = useLocation()
  const stateDeliveryDetails = location.state as deliveryDetailsType

  const navigate = useNavigate()

  useEffect(() => {
    if (!stateDeliveryDetails) {
      navigate('/', { replace: true })
    }
  }, [stateDeliveryDetails, navigate])

  if (!stateDeliveryDetails) {
    return null
  }

  const {
    street,
    number,
    neighborhood,
    city,
    state,
  } = stateDeliveryDetails.data

  const { methodPayment } = stateDeliveryDetails

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
                Entrega em <strong>{street}, {number}</strong>
              </p>
              <p>{neighborhood} - {city}, {state}</p>
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
              <strong>
                {methodPayment === 'credit-card' ? 'Cartão de Crédito' : ''}
                {methodPayment === 'debit-card' ? 'Cartão de Débito' : ''}
                {methodPayment === 'money' ? 'Dinheiro' : ''}
              </strong>
            </OrderDeliveryInfo>
          </OrderInfo>
        </OrderInfosWrapper>
      </section>

      <DeliveryImage src={delivery} alt="" />
    </SuccessContainer>
  )
}
