import styled from 'styled-components'
import heroBackground from '../../assets/hero-bg.svg'

// Horo
export const HeroContainer = styled.section`
  max-height: 34rem;
  padding: 5.875rem 0 6.75rem;

  background-image: url(${heroBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1020px) {
    max-height: max-content;
    padding: 5.875rem 0 6.75rem;
  }
`

export const HeroContent = styled.div`
  flex: 1;
  
  max-width: 71rem;
  margin: auto;
  padding: 0 .5rem;

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HeroIntro = styled.div`
  max-width: 588px;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", serif;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']}
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }

  @media (max-width: 1020px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export const HeroFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  align-items: start;

  @media (max-width: 355px) {
    column-gap: 20px;
  }

  p {
    display: flex;
    gap: 0.75rem;
  }
`

export const HeroImage = styled.img`
  max-width: 476px;
  width: 100%;
`

// Coffees
export const CoffeesContainer = styled.main`
  max-width: 71rem;
  margin: 2rem auto 0;
  padding: 0 .5rem;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-family: "Baloo 2", serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
`
