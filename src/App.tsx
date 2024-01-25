import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import GlobalStyle from './styles'
import { Footer } from './components/Footer/indes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
