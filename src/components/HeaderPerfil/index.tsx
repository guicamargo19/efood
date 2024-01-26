import { HeaderContainer, ImagemFundo } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import macarrao from '../../assets/macarrao-fundo.png'
import Tag from '../Tag'

export const HeaderPerfil = () => (
  <div>
    <div style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer className="container">
        <Link to={'/'}>Restaurantes</Link>
        <img src={logo} alt="Logo EFood" />
        <div>
          <span>0 </span>Produdo(s) no carrinho
        </div>
      </HeaderContainer>
    </div>
    <ImagemFundo style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <Tag>Italiana</Tag>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </ImagemFundo>
  </div>
)
