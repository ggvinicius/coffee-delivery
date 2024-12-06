import styled from 'styled-components'

export const CoffeeListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

export const CoffeeItemContent = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const CoffeeDetails = styled.div`
  /* width: 10.625rem; */
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h3 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeControls = styled.div`
  display: flex;
  gap: .5rem;
`

export const RemoveCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 0.375rem;
  padding: .5rem;

  cursor: pointer;

  transition: all .3s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    transform: scale(1.045);
  }

  span {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CoffeePrice = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`

export const DivisionLine = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`
