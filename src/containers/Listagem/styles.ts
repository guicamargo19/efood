import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaRestaurantes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding-top: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: 40px;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
