import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressFieldset,
  AddressInputs,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  FormInfo,
  Icon,
  Infos,
  NeighborhoodInput,
  NumberInput,
  StateInput,
  StreetInput,
  ZipCodeInput
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <form action="">
          <AddressFieldset>
            <FormInfo>
              <Icon $IconColor='yellow-dark'>
                <MapPinLine size={22} />
              </Icon>

              <Infos>
                <legend>Endereço de entrega</legend>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </Infos>
            </FormInfo>

            <AddressInputs>
              <ZipCodeInput>
                <input type="text" id='zipCode' placeholder='CEP' />
                <label htmlFor="zipCode">Informe o CEP</label>
              </ZipCodeInput>

              <StreetInput>
                <input type="text" id='street' placeholder='Rua' />
                <label htmlFor="street">Informe a rua</label>
              </StreetInput>
              
              <NumberInput>
                <input type="text" id='number' placeholder='Número' />
                <label htmlFor="number">Informe o número</label>
              </NumberInput>

              <ComplementInput>
                <input type="text" id='cep' placeholder='Complemento' />
                <span>Opcional</span>
              </ComplementInput>

              <NeighborhoodInput>
                <input type="text" id='neighborhood' placeholder='Bairro' />
                <label htmlFor="neighborhood">Informe o bairro</label>
              </NeighborhoodInput>

              <CityInput>
                <input type="text" id='city' placeholder='Cidade' />
                <label htmlFor="city">Informe a cidade</label>
              </CityInput>

              <StateInput>
                <input type="text" id='state' placeholder='UF' />
                <label htmlFor="state">Informe o UF</label>
              </StateInput>
            </AddressInputs>

          </AddressFieldset>

          
        </form>
      </section>

      <aside>
        <h2>Cafés selecionados</h2>
      </aside>
    </CheckoutContainer>
  )
}
