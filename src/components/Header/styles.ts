import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { TagContainer } from '../../components/Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  display: block;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 40px;
      width: 126px;
      transition: 0.3s;

      &:hover {
        scale: 1.1;
        transition: 0.3s;
      }
    }

    h2 {
      font-weight: 900;
      margin-top: 140px;
      padding-bottom: 40px;
      font-size: 36px;
      text-align: center;
      line-height: 42px;
      width: 540px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 300px;

    .container {
      max-width: 80%;

      img {
        width: 96px;
      }

      h2 {
        font-size: 20px;
        margin-top: 80px;
        padding: 16px 20px;
        width: 360px;
      }
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 64px;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;

  div {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    margin-left: 82px;
    width: 126px;
  }

  a {
    text-decoration: none;
    color: ${Colors.textColor};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;

    a {
      padding-bottom: 32px;
    }

    div {
      padding-top: 32px;
    }

    img {
      margin: 0;
      padding: 0;
      width: 96px;
    }
  }
`

export const ImagemFundo = styled.div`
  width: 100%;
  display: flex;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
  }

  ${TagContainer} {
    background-color: transparent;
    color: ${Colors.mainBackground};
    font-size: 32px;
    margin: 0;
    padding: 0;
    line-height: 38px;
    font-weight: 100;
    padding-top: 24px;
  }

  h1 {
    padding-top: 156px;
    color: ${Colors.mainBackground};
  }

  @media (max-width: ${breakpoints.tablet}) {
    h1 {
      font-size: 24px;
    }
    ${TagContainer} {
      font-size: 24px;
    }
  }
`
