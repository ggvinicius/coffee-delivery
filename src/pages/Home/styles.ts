import styled from 'styled-components'
import heroBackground from '../../assets/hero-bg.svg'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 544px;
  height: 100vh;

  background-image: url(${heroBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1020px) {
    max-height: max-content;
    padding: 3rem .5rem;
  }
`

export const HeroContent = styled.div`
  max-width: 70rem;
  margin: auto;

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

  p {
    display: flex;
    gap: 0.75rem;
  }
`

export const HeroImage = styled.img`
  max-width: 420px;
  width: 100%;
`

