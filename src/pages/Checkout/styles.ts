import styled, { css } from 'styled-components'

const FieldsetAndAsideBase = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border: none;
  border-radius: 0.375rem;

  @media (max-width: 680px) {
  padding: 1.25rem;
  }

  @media (max-width: 340px) {
  padding: .5rem;
  }
`

export const Error = styled.label`
  font-size: 0.75rem;
  color: ${(props) => props.theme['danger']};
`

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: start;
  gap: 2rem;

  max-width: 71rem;
  margin: 2.5rem auto 0;
  padding: 0 .5rem;

  h2 {
    font-family: "Baloo 2", serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  aside {
    width: 28rem;
  }

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;

    section {
      width: 100%;
    }

    aside {
      width: 100%;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const AddressFieldset = styled.fieldset`
  ${FieldsetAndAsideBase}
`

export const FormInfo = styled.div`
  display: flex;
  gap: .5rem;
`

const ICON_COLOR = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
}

interface IconColorProps {
  $IconColor: keyof typeof ICON_COLOR;
}

export const Icon = styled.span<IconColorProps>`
  color: ${(props) => props.theme[ICON_COLOR[props.$IconColor]]};
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  legend {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: 
    minmax(0px, 200px) minmax(0px, 276px) minmax(0px, 60px);
  align-items: end;
  gap: 1rem;

  @media (max-width: 1130px) {
    grid-template-columns:
      minmax(200px, 1fr) minmax(276px, 1fr) minmax(60px, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const InputBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;

  input {
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: none;
    border-radius: .25rem;
    padding: 0.75rem;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
    
    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

const BreakPointGridItems = css`
  @media (max-width: 680px) {
    grid-column: 1/-1;
  }
`

export const ZipCodeInput = styled(InputBase)`
  grid-column: 1/2;

  ${BreakPointGridItems}
`

export const StreetInput = styled(InputBase)`
  grid-column: 1/-1;

  ${BreakPointGridItems}
`

export const NumberInput = styled(InputBase)`
  grid-column: 1/2;

  ${BreakPointGridItems}
`

export const ComplementInput = styled(InputBase)`
  grid-column: 2/-1;

  ${BreakPointGridItems}
  
  position: relative;

  input {
    padding-right: 4.75rem;
  }

  label {
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    padding-left: 1rem;

    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);

    cursor: text;
  }
`

export const NeighborhoodInput = styled(InputBase)`
  grid-column: 1/2;

  ${BreakPointGridItems}
`

export const CityInput = styled(InputBase)`
  grid-column: 2/3;

  ${BreakPointGridItems}
`

export const StateInput = styled(InputBase)`
  grid-column: 3/4;

  ${BreakPointGridItems}
`

export const PaymentFieldset = styled.fieldset`
  ${FieldsetAndAsideBase}
  margin-top: 0;
`

export const PaymentButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

interface PaymentButtonProps {
  $isPaymentSelected: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 1rem;

    @media (max-width: 680px) {
      justify-content: center;
    }

    background-color: ${(props) => props.$isPaymentSelected
    ? props.theme['purple-light']
    : props.theme['base-button']};

    border: ${(props) => props.$isPaymentSelected
    ? `1px solid ${props.theme['purple']}`
    : 'none'};

    transform: scale(${(props) => props.$isPaymentSelected ? 1.045 : 1});

    color: ${(props) => props.theme['base-text']};
    border-radius: 0.375rem;

    cursor: pointer;

    transition: all .3s;

    &:hover {
      background-color: ${(props) => props.$isPaymentSelected
    ? props.theme['purple-light']
    : props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme.purple};
    }
`

export const CoffeeCartContainer = styled.div`
  ${FieldsetAndAsideBase}
  border-radius: 0.375rem 2.75rem;
`

export const CoffeeList = styled.ul`
  display: flex;
  flex-direction: column;
  
  list-style-type: none;
`

export const PriceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  list-style-type: none;
`

export const PriceItem = styled.li`
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  span {
    font-size: 1rem;
  }
`

const TotalPriceBase = css`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: bold;
`

export const TotalPriceLabel = styled.p`
  ${TotalPriceBase}
`

export const TotalPriceValue = styled.span`
  ${TotalPriceBase}
`

export const ConfirmOrderButton = styled.button`
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;

  cursor: pointer;

  transition: all .3s;
  
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transform: scale(1.045);
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    text-align: center;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  a {
    width: 100%;

    border: none;
    border-radius: 0.375rem;
    padding: 0.75rem;

    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;

    cursor: pointer;

    transition: all .3s;

    &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transform: scale(1.045);
  }
  }
`
