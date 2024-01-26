import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../../components/Tag/styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  img {
    padding-left: 82px;
    margin-top: -10px;
  }

  a {
    text-decoration: none;
    color: ${Colors.textColor};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ImagemFundo = styled.div`
  width: 100%;
  display: flex;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  ${TagContainer} {
    background-color: transparent;
    color: ${Colors.mainBackground};
    font-size: 32px;
    line-height: 38px;
    font-weight: 100;
    padding-top: 24px;
  }

  h1 {
    padding-top: 156px;
    color: ${Colors.mainBackground};
  }
`
