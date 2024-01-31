import styled from 'styled-components'

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
      margin-top: 64px;
      width: 125px;
    }

    h2 {
      font-weight: 900;
      margin-top: 150px;
      padding-bottom: 40px;
      font-size: 36px;
      text-align: center;
      line-height: 42px;
      width: 540px;
    }
  }
`
