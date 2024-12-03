import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  /* align-items: start; */
  gap: 2rem;

  max-width: 70rem;
  margin: 2.5rem auto 0;

  h2 {
    font-family: "Baloo 2", serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
`

export const AddressFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border: none;
  border-radius: 0.375rem;
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
  grid-template-columns: 200px 276px 60px;
  align-items: start;
  gap: 1rem;
`

const InputBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;

  label {
    font-size: 0.75rem;
    color: ${(props) => props.theme['danger']};
  }

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

export const ZipCodeInput = styled(InputBase)`
  grid-column: 1/2;
`

export const StreetInput = styled(InputBase)`
  grid-column: 1/-1;
`

export const NumberInput = styled(InputBase)`
  grid-column: 1/2;
`

export const ComplementInput = styled(InputBase)`
  grid-column: 2/-1;
  position: relative;

  input {
    padding-right: 4.75rem;
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    padding-left: 1rem;

    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`

export const NeighborhoodInput = styled(InputBase)`
  grid-column: 1/2;
`

export const CityInput = styled(InputBase)`
  grid-column: 2/3;
`

export const StateInput = styled(InputBase)`
  grid-column: 3/4;
`
