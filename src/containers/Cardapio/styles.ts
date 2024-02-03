import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaCardapio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  padding-top: 64px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`
