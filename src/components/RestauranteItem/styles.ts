import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

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
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-left: 1px solid ${Colors.textColor};
  border-bottom: 1px solid ${Colors.textColor};
  border-right: 1px solid ${Colors.textColor};
  border-top: none;
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
  font-size: 14px;
  height: 100px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 184px;
  }
`

export const ButtonSpace = styled.div`
  display: flex;
  margin-top: 16px;
`
