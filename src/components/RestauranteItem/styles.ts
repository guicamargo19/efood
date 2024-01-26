import styled from 'styled-components'
import { Colors } from '../../styles'

export const RestauranteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ContainerInfo = styled.div`
  padding: 6px;
  border-left: 1px solid ${Colors.textColor};
  border-bottom: 1px solid ${Colors.textColor};
  border-right: 1px solid ${Colors.textColor};
  border-top: none;
  padding-bottom: 46px;
`

export const ImageCover = styled.img`
  height: 210px;
  width: 100%;
  object-fit: cover;
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-weight: bold;

  span {
    display: flex;
    align-items: center;

    img {
      margin-left: 6px;
    }
  }
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
