import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from '@phosphor-icons/react'

import {
  AddressFieldset,
  AddressInputs,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  FormContainer,
  FormInfo,
  Icon,
  Infos,
  NeighborhoodInput,
  NumberInput,
  PaymentButton,
  PaymentButtonsWrapper,
  PaymentFieldset,
  StateInput,
  StreetInput,
  ZipCodeInput
} from './styles'
import { useState } from 'react'

type MethodPaymentProps = 'credit-card' | 'debit-card' | 'money'

export function Checkout() {
  const [methodPayment, setMethodPayment] =
    useState<MethodPaymentProps | null>(null)

  function handleTogglePaymentMethod(methodPayment: MethodPaymentProps) {
    setMethodPayment(methodPayment)
  }

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <FormContainer action="">
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
                <label htmlFor="zipCode">Informe o CEP</label>
                <input type="text" id='zipCode' placeholder='CEP' />
              </ZipCodeInput>

              <StreetInput>
                <label htmlFor="street">Informe a rua</label>
                <input type="text" id='street' placeholder='Rua' />
              </StreetInput>

              <NumberInput>
                <label htmlFor="number">Informe o número</label>
                <input type="text" id='number' placeholder='Número' />
              </NumberInput>

              <ComplementInput>
                <input type="text" id='cep' placeholder='Complemento' />
                <span>Opcional</span>
              </ComplementInput>

              <NeighborhoodInput>
                <label htmlFor="neighborhood">Informe o bairro</label>
                <input type="text" id='neighborhood' placeholder='Bairro' />
              </NeighborhoodInput>

              <CityInput>
                <label htmlFor="city">Informe a cidade</label>
                <input type="text" id='city' placeholder='Cidade' />
              </CityInput>

              <StateInput>
                <label htmlFor="state">Informe o UF</label>
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
      </aside>
    </CheckoutContainer>
  )
}
