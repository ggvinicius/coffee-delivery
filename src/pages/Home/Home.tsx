import {
  CoffeesWrapper,
  CoffeesContainer,
  HeroContainer,
  HeroContent,
  HeroFeatures,
  HeroImage,
  HeroIntro,
  HeroText
} from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import hero from '../../assets/hero.svg'
import { HeroFeatureItem } from './components/HeroFeatureItem'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroIntro>
            <HeroText>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver,
                a qualquer hora
              </p>
            </HeroText>

            <HeroFeatures>
              <HeroFeatureItem
                Icon={ShoppingCart}
                label='Compra simples e segura'
                backgroundColorFeature='yellow-dark'
              />

              <HeroFeatureItem
                Icon={Package}
                label='Embalagem mantém o café intacto'
                backgroundColorFeature='base-text'
              />

              <HeroFeatureItem
                Icon={Timer}
                label='Entrega rápida e rastreada'
                backgroundColorFeature='yellow'
              />

              <HeroFeatureItem
                Icon={Coffee}
                label='O café chega fresquinho até você'
                backgroundColorFeature='purple'
              />
            </HeroFeatures>
          </HeroIntro>

          <HeroImage src={hero} />
        </HeroContent>
      </HeroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <CoffeesWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CoffeesWrapper>
      </CoffeesContainer>
    </>
  )
}
