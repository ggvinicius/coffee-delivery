import styled from 'styled-components'

export const CoffeeCard = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  padding: .5rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageCoffee = styled.img`
  margin-top: -20px;
`

export const TagList = styled.ul`
  margin: .75rem 0 1rem;

  display: flex;
  gap: 4px;
  
  list-style-type: none;
`

export const TagItem = styled.li`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 1rem;

  font-weight: bold;
  font-size: 0.625rem;

  padding: 0.25rem 0.5rem;
`

export const Title = styled.h3`
  font-family: "Baloo 2", serif;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};

  margin-bottom: .5rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  line-height: 1.3;

  margin-bottom: 2rem;
`

export const PriceAndControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Price = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: "Baloo 2", serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Controls = styled.div`
  display: flex;
  gap: .5rem;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
  padding: .5rem 0.75rem;

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};

    cursor: pointer;
    transition: all .3s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  } 

  span {
    color: ${(props) => props.theme['base-title']};
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: .5rem;
  color: ${(props) => props.theme['base-card']};
  background-color: ${(props) => props.theme['purple-dark']};
  padding: .5rem;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    transform: scale(1.1);
  }
`
