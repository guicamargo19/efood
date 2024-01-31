import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardapioContainer = styled.div`
  max-width: 320px;
  width: 100%;
  border: none
  display: block;
  padding: 8px;
  padding-bottom: 6px;
  background-color: ${Colors.textColor};
  color: ${Colors.footerBackground};
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    font-weight: 900;
    line-height: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

export const ImageCover = styled.div`
  img {
    height: 168px;
    width: 100%;
  }
`

export const Descricao = styled.p`
  text-align: justify;
  //height: 88px;
  font-size: 14px;
  padding-bottom: 8px;
  line-height: 22px;
  font-weight: 400;
`

export const Botao = styled.button`
  background-color: ${Colors.footerBackground};
  color: ${Colors.textColor};
  border: 1px solid ${Colors.mainBackground};
  width: 100%;
  text-decoration: none;
  padding: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: darkred;
    color: ${Colors.mainBackground};
  }
`
