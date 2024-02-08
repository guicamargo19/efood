import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import lixeira from '../../assets/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Colors.textColor};
  font-size: 14px;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  color: ${Colors.footerBackground};
  z-index: 1;

  > button {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px 8px;
  background-color: ${Colors.footerBackground};
  color: ${Colors.textColor};
  line-height: 22px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-heigth: 16px;
  margin-bottom: 16px;
`
