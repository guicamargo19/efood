import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
    width: 220px;
    height: 24px;
    color: ${Colors.textColor};
    padding: 4px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    border: none;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    background-color: ${Colors.footerBackground};
  }
`

export const ButtonLink = styled(Link)`
  background-color: ${Colors.textColor};
  color: ${Colors.footerBackground};
  border: 1px solid ${Colors.textColor};
  width: 82px;
  line-height: 16px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  padding: 4px 6px;
  align-itens: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const ButtonProductLink = styled.button`
  background-color: ${Colors.footerBackground};
  color: ${Colors.textColor};
  border: none;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  line-height: 16px;
  font-size: 14px;
  font-weight: 700;
`
