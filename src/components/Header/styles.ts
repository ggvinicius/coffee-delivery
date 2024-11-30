import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border: 0;
  padding: 6px;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    opacity: .86;
  }
`

export const LocalizationButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple']};
  font-size: 0.875rem;

  span {
    color: ${(props) => props.theme['purple-dark']}
  }
`

export const CartButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;
`

export const CartCounter = styled.span`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  position: absolute;
  right: 0;
  top: 0;

  transform: translate(50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`
