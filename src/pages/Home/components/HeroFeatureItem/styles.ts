import styled from 'styled-components'

const BG_COLOR = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
  'base-text': 'base-text'
}

interface BgColorProps {
  $backgroundColor: keyof typeof BG_COLOR;
}

export const HeroFeature = styled.div<BgColorProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  color: ${(props) => props.theme['base-text']};

  div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: .5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color:
      ${(props) => props.theme[BG_COLOR[props.$backgroundColor]]};
    color: ${(props) => props.theme.white};
  }
`
