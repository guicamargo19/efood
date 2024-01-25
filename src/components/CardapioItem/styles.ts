import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardapioContainer = styled.div`
  width: 100%;
  border: none
  display: block;
  margin-top: 30px;
  padding-bottom: 6px;
  background-color: ${Colors.textColor};
  color: ${Colors.mainBackground};
`

export const ContainerInfo = styled.div`
  padding: 6px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

export const ImageCover = styled.div`
  padding: 10px;

  img {
    width: 100%;
  }
`

export const Descricao = styled.p`
  text-align: justify;
  height: 50px;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 20px;
  font-weight: 100;
`

export const Botao = styled.button`
  background-color: ${Colors.footerBackground};
  color: ${Colors.textColor};
  border: 1px solid ${Colors.mainBackground};
  width: 100%;
  text-decoration: none;
  padding: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: darkred;
    color: ${Colors.mainBackground};
  }
`
