import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useHookFormMask } from 'use-mask-input'

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
import { CartContext } from '../../contexts/CartContext'

type MethodPaymentType = 'credit-card' | 'debit-card' | 'money'

const addressFormValidationSchema = z.object({
  zipCode: z
    .string()
    .length(9, 'Informe o CEP')
    .refine(
      (value) => /^[0-9]{5}-[0-9]{3}$/.test(value.replace(/_/g, '')),
      { message: 'CEP inválido' }
    ),
  street: z
    .string()
    .min(1, 'Informe a rua')
    .max(120, 'A rua pode ter até 120 caracteres'),
  number: z
    .number({ invalid_type_error: 'Informe o número' })
    .min(0, 'Informe o número'),
  complement: z
    .string()
    .optional(),
  neighborhood: z
    .string()
    .min(1, 'Informe o bairro')
    .max(60, 'O bairro pode ter até 60 caracteres'),
  city: z
    .string()
    .min(1, 'Informe a cidade')
    .max(60, 'A cidade pode ter até 60 caracteres'),
  state: z
    .string()
    .length(2, 'UF: 2 caracteres')
})

type addressFormType = z.infer<typeof addressFormValidationSchema>

export interface deliveryDetailsType {
  data: addressFormType
  methodPayment: MethodPaymentType
}

export function Checkout() {
  const { cart, clearCart } = useContext(CartContext)

  const [
    methodPayment,
    setMethodPayment
  ] = useState<MethodPaymentType>('credit-card')

  const { register, handleSubmit, formState: { errors } } =
    useForm<addressFormType>({
      resolver: zodResolver(addressFormValidationSchema),
      defaultValues: {}
    })

  const registerWithMask = useHookFormMask(register)

  const navigate = useNavigate()

  function validateAddressForm(data: addressFormType) {
    const deliveryDetails: deliveryDetailsType = {
      data,
      methodPayment
    }

    navigate('/success', { state: deliveryDetails })
    clearCart()
  }

  function handleTogglePaymentMethod(methodPayment: MethodPaymentType) {
    setMethodPayment(methodPayment)
  }

  function sumTotalCoffeePrice() {
    const result = cart.reduce((acc, {
      price,
      quantity
    }) => acc += (price * quantity), 0)

    return result
  }

  const deliveryFee = 3.5
  const totalOrderCost = sumTotalCoffeePrice() + deliveryFee

  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <FormContainer
          id='orderForm'
          onSubmit={handleSubmit(validateAddressForm)}
        >
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
                {errors.zipCode &&
                  <Error htmlFor="zipCode">{errors.zipCode.message}</Error>}
                <input
                  {...registerWithMask('zipCode', ['99999-999'])}
                  type="text"
                  id='zipCode'
                  placeholder='CEP'
                />
              </ZipCodeInput>

              <StreetInput>
                {errors.street &&
                  <Error htmlFor="street">{errors.street.message}</Error>}
                <input
                  {...register('street')}
                  type="text"
                  id='street'
                  placeholder='Rua'
                />
              </StreetInput>

              <NumberInput>
                {errors.number &&
                  <Error htmlFor="number">{errors.number.message}</Error>}
                <input
                  {...register('number', { valueAsNumber: true })}
                  type="number"
                  id='number'
                  placeholder='Número'
                />
              </NumberInput>

              <ComplementInput>
                <input
                  {...register('complement')}
                  type="text"
                  id='complement'
                  placeholder='Complemento'
                />
                <label htmlFor='complement'>Opcional</label>
              </ComplementInput>

              <NeighborhoodInput>
                {errors.neighborhood &&
                  <Error htmlFor="neighborhood">
                    {errors.neighborhood.message}
                  </Error>}
                <input
                  {...register('neighborhood')}
                  type="text"
                  id='neighborhood'
                  placeholder='Bairro'
                />
              </NeighborhoodInput>

              <CityInput>
                {errors.city &&
                  <Error htmlFor="city">{errors.city.message}</Error>}
                <input
                  {...register('city')}
                  type="text"
                  id='city'
                  placeholder='Cidade'
                />
              </CityInput>

              <StateInput>
                {errors.state &&
                  <Error htmlFor="state">{errors.state.message}</Error>}
                <input
                  {...register('state')}
                  type="text"
                  id='state'
                  placeholder='UF'
                  maxLength={2}
                />
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
