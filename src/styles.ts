import { createGlobalStyle } from 'styled-components'

export const Colors = {
  textColor: '#E66767',
  mainBackground: '#FFF8F2',
  footerBackground: '#FFEBD9'
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: ${Colors.mainBackground};
  color: ${Colors.textColor};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`

export default GlobalStyle
