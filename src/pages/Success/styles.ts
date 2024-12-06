import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 71rem;
  margin: 5rem auto 0;
  padding: 0 .5rem;

  display: flex;
  gap: 6.375rem;

  section {
    flex: 1;
    
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    p {
      line-height: 1.3;
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ConfirmationMessage = styled.div`
  h1 {
    font-family: "Baloo 2", serif;
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 1020px) {
      h1 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
`

export const OrderInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.white}; /* Fundo da div */
  border-radius: 0.375rem 2.25rem; /* Define o border-radius da div */

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit; 
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    z-index: -1;
  }

  @media (max-width: 1020px) {
    padding: 1.25rem;
  }
`


const BG_COLOR = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
}

interface BgColorProps {
  $backgroundColor: keyof typeof BG_COLOR;
}

export const OrderInfo = styled.div<BgColorProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    padding: .5rem;

    background-color: 
      ${(props) => props.theme[BG_COLOR[props.$backgroundColor]]};
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 1020px) {
    align-items: start;
  }
`

export const OrderDeliveryInfo = styled.div`
  p, strong {
    color: ${(props) => props.theme['base-text']}
  }
`

export const DeliveryImage = styled.img`
  max-width: 30.75rem;
  width: 100%;
`
