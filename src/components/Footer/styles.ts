import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top: 120px;

  background-color: ${Colors.footerBackground};

  img {
    margin-top: 40px;
    width: 126px;
  }

  p {
    font-size: 10px;
    width: 480px;
    margin-top: 20px;
    line-height: 12px;
    font-weight: 400;
    color: ${Colors.textColor};
  }

  a {
    color: ${Colors.textColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 96px;
    }

    p {
      font-size: 8px;
      width: 330px;
    }
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  a {
    img {
      width: 24px;
      margin-left: 8px;

      &:hover {
        transition: 0.3s;
        scale: 1.1;
      }
    }
  }
`
