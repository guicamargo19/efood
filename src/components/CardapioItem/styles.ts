import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

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
    object-fit: cover;
  }
`

export const Descricao = styled.p`
  text-align: justify;
  font-size: 14px;
  padding-bottom: 8px;
  line-height: 22px;
  font-weight: 400;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${Colors.textColor};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }

  header {
    display: flex;
    justify-content: end;

    img {
      padding: 8px;
      cursor: pointer;

      &:hover {
        scale: 1.1;
      }
    }
  }
`

export const ItemModal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const ItemInfoModal = styled.div`
  color: ${Colors.mainBackground};
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  line-height: 22px;

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    text-align: justify;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: ${Colors.textColor};
  width: 218px;
  background-color: ${Colors.footerBackground};

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`
