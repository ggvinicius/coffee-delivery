import { useContext, useState } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  AddressFieldset,
  AddressInputs,
  CheckoutContainer,
  CityInput,
  CoffeeCartContainer,
  CoffeeList,
  ComplementInput,
  ConfirmOrderButton,
  EmptyCart,
  Error,
  FormContainer,
  FormInfo,
  Icon,
  Infos,
  NeighborhoodInput,
  NumberInput,
  PaymentButton,
  PaymentButtonsWrapper,
  PaymentFieldset,
  PriceItem,
  PriceList,
  StateInput,
  StreetInput,
  TotalPriceLabel,
  TotalPriceValue,
  ZipCodeInput
} from './styles'

import { CoffeeItem } from './components/CoffeeItem'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

type MethodPaymentProps = 'credit-card' | 'debit-card' | 'money'

export function Checkout() {
  const { cart } = useContext(CartContext)

  const [
    methodPayment,
    setMethodPayment
  ] = useState<MethodPaymentProps>('credit-card')

  const navigate = useNavigate()

  function goToSuccessPage() {
    navigate('/success')
  }

  const deliveryFee = 3.5

  function handleTogglePaymentMethod(methodPayment: MethodPaymentProps) {
    setMethodPayment(methodPayment)
  }

  function sumTotalCoffeePrice() {
    const result = cart.reduce((acc, {
      price,
      quantity
    }) => acc += (price * (quantity ?? 0)), 0)

    return result
  }

  const totalOrderCost = sumTotalCoffeePrice() + deliveryFee

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <FormContainer id='orderForm' action="">
          <AddressFieldset>
            <FormInfo>
              <Icon $IconColor='yellow-dark'>
                <MapPinLine size={22} />
              </Icon>

              <Infos>
                <legend>Endereço de entrega</legend>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </Infos>
            </FormInfo>

            <AddressInputs>
              <ZipCodeInput>
                <Error htmlFor="zipCode">Informe o CEP</Error>
                <input type="text" id='zipCode' placeholder='CEP' />
              </ZipCodeInput>

              <StreetInput>
                <Error htmlFor="street">Informe a rua</Error>
                <input type="text" id='street' placeholder='Rua' />
              </StreetInput>

              <NumberInput>
                <Error htmlFor="number">Informe o número</Error>
                <input type="text" id='number' placeholder='Número' />
              </NumberInput>

              <ComplementInput>
                <input type="text" id='cep' placeholder='Complemento' />
                <label htmlFor='cep'>Opcional</label>
              </ComplementInput>

              <NeighborhoodInput>
                <Error htmlFor="neighborhood">Informe o bairro</Error>
                <input type="text" id='neighborhood' placeholder='Bairro' />
              </NeighborhoodInput>

              <CityInput>
                <Error htmlFor="city">Informe a cidade</Error>
                <input type="text" id='city' placeholder='Cidade' />
              </CityInput>

              <StateInput>
                <Error htmlFor="state">Informe o UF</Error>
                <input type="text" id='state' placeholder='UF' />
              </StateInput>
            </AddressInputs>
          </AddressFieldset>

          <PaymentFieldset>
            <FormInfo>
              <Icon $IconColor='purple'>
                <CurrencyDollar size={22} />
              </Icon>

              <Infos>
                <legend>Pagamento</legend>
                <p>
                  O pagamento é feito na entrega.
                  Escolha a forma que deseja pagar
                </p>
              </Infos>
            </FormInfo>

            <PaymentButtonsWrapper>
              <PaymentButton
                onClick={() => handleTogglePaymentMethod('credit-card')}
                type='button'
                $isPaymentSelected={methodPayment === 'credit-card'} >
                <span>
                  <CreditCard size={16} />
                </span>
                Cartão de crédito
              </PaymentButton>

              <PaymentButton
                onClick={() => handleTogglePaymentMethod('debit-card')}
                type='button'
                $isPaymentSelected={methodPayment === 'debit-card'} >
                <span>
                  <Bank size={16} />
                </span>
                Cartão de débito
              </PaymentButton>

              <PaymentButton
                onClick={() => handleTogglePaymentMethod('money')}
                type='button'
                $isPaymentSelected={methodPayment === 'money'} >
                <span>
                  <Money size={16} />
                </span>
                Dinheiro
              </PaymentButton>
            </PaymentButtonsWrapper>
          </PaymentFieldset>
        </FormContainer>
      </section>

      <aside>
        <h2>Cafés selecionados</h2>

        <CoffeeCartContainer>
          {cart.length > 0 ? (
            <>
              <CoffeeList>
                {cart.map((coffee) => (
                  <CoffeeItem
                    key={coffee.id}
                    coffee={coffee}
                  />
                ))}

              </CoffeeList>

              <PriceList>
                <PriceItem>
                  <p>Total de itens</p>
                  <span>R$ {sumTotalCoffeePrice().toFixed(2)}</span>
                </PriceItem>

                <PriceItem>
                  <p>Entrega</p>
                  <span>R$ {deliveryFee.toFixed(2)}</span>
                </PriceItem>

                <PriceItem>
                  <TotalPriceLabel>Total</TotalPriceLabel>
                  <TotalPriceValue>
                    R$ {totalOrderCost.toFixed(2)}
                  </TotalPriceValue>
                </PriceItem>
              </PriceList>

              <ConfirmOrderButton
                onClick={goToSuccessPage}
                form='orderForm'
                disabled={false}
              >
                Confirmar pedido
              </ConfirmOrderButton>
            </>
          ) :
            <EmptyCart>
              <p>
                Seu carrinho está esperando por deliciosos cafés!
                Adicione agora.
              </p>

              <NavLink to="/">Explorar Menu</NavLink>
            </EmptyCart>}
        </CoffeeCartContainer>
      </aside>
    </CheckoutContainer>
  )
}
