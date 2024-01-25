import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.div`
  display: block;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top: 120px;

  background-color: ${Colors.footerBackground};

  img {
    margin-top: 40px;
    width: 125px;
  }

  p {
    font-size: 12px;
    margin-top: 20px;
    line-height: 14px;
    color: ${Colors.textColor};
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 90px;

  a {
    img {
      width: 30px;
      padding: 3px;

      &:hover {
        transition: 0.3s;
        scale: 1.1;
      }
    }
  }
`
