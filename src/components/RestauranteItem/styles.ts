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
  position: relative;
  padding: 8px;
  padding-bottom: 16px;
  height: 200px;
  border-left: 1px solid ${Colors.textColor};
  border-bottom: 1px solid ${Colors.textColor};
  border-right: 1px solid ${Colors.textColor};
  border-top: none;
  padding-bottom: 48px;
`

export const ImageCover = styled.img`
  height: 217px;
  width: 100%;
  object-fit: cover;
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-weight: bold;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;

    img {
      margin-left: 8px;
      width: 21px;
      padding-bottom: 2px;
    }
  }
`

export const Descricao = styled.p`
  text-align: justify;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 48px;
`
