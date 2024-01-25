import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import { Imagem } from './styles'
import { Link } from 'react-router-dom'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Link to={'/'}>
        <img src={logo} alt="EFood Logo" />
      </Link>
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </div>
  </Imagem>
)
