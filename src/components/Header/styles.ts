import styled, { css } from 'styled-components'

const LocationAndLinkBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border: 0;
  padding: 6px;
  border-radius: 6px;
`

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: auto;
  padding: 0 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1020px) {
    padding: 0 .5rem;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  a {
    ${LocationAndLinkBase};
    position: relative;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    cursor: pointer;

    &:hover {
      opacity: .86;
    }
  }
`

export const Localization = styled.div`
  ${LocationAndLinkBase};
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple']};
  font-size: 0.875rem;

  span {
    color: ${(props) => props.theme['purple-dark']}
  }
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
