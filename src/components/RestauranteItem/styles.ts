import styled from 'styled-components'
import { Colors } from '../../styles'

export const RestauranteContainer = styled.div`
  width: 100%;
  border: 1px solid ${Colors.textColor};
  display: block;
  margin-top: 60px;
  padding-bottom: 40px;
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ContainerInfo = styled.div`
  padding: 6px;
`

export const ImageCover = styled.img`
  width: 100%;
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const Descricao = styled.p`
  text-align: justify;
  height: 100px;
`

export const Botao = styled.button`
  background-color: ${Colors.textColor};
  color: ${Colors.mainBackground};
  border: 1px solid ${Colors.textColor};
  width: 82px;
  text-decoration: none;
  padding: 6px;
  margin-top: 12px;
  cursor: pointer;
  position: absolute;

  &:hover {
    background-color: ${Colors.mainBackground};
    color: ${Colors.textColor};
    border: 1px solid ${Colors.textColor};
  }
`
