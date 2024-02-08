import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const DeliveryContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.delivery-open {
    display: flex;
  }
`

export const CardData = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  input {
    background-color: ${Colors.footerBackground};
    height: 32px;
    border: 1px solid ${Colors.footerBackground};
    outline-color: ${Colors.textColor};
    padding: 8px;
    color: ${Colors.blackText};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    text-align: justify;
  }
`

export const CardDataAdress = styled.div`
  display: flex;
  column-gap: 34px;
`

export const Sidebar = styled.aside`
  background-color: ${Colors.textColor};
  font-size: 14px;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  color: ${Colors.footerBackground};
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const CardButton = styled.div`
  margin-top: 32px;
  max-width: 100%;

  > button {
    margin-bottom: 8px;
    max-width: 100%;
    width: 100%;
  }
`

export const OrderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.order-open {
    display: flex;
  }
`

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.payment-open {
    display: flex;
  }
`

export const DeliveryPaymentContainer = styled.div`
  input {
    &.error {
      border: 2px solid red;
    }
  }
`
