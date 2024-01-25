import { HeaderContainer, ImagemFundo } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import macarrao from '../../assets/macarrao-fundo.png'
import Tag from '../Tag'

export const HeaderPerfil = () => (
  <div>
    <HeaderContainer>
      <Link to={'/'}>Restaurantes</Link>
      <img src={logo} alt="Logo EFood" />
      <div>
        <span>0 </span>Produdo(s) no carrinho
      </div>
    </HeaderContainer>
    <ImagemFundo style={{ backgroundImage: `url(${macarrao})` }}>
      <Tag>Italiana</Tag>
      <h1>La Dolce Trattoria</h1>
    </ImagemFundo>
  </div>
)
