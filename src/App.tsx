import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import GlobalStyle from './styles'
import { Footer } from './components/Footer'
import Cart from './components/Cart'
import Order from './components/Order'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
        <Order />
      </BrowserRouter>
    </Provider>
  )
}

export default App
