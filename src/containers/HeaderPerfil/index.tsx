import { HeaderContainer, ImagemFundo } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import macarrao from '../../assets/macarrao-fundo.png'
import Restaurante from '../../models/Restaurante'
import HeaderMenuItem from '../../components/HeaderMenuItem'

export type Props = {
  restaurantes: Restaurante[]
}

export const HeaderPerfil = ({ restaurantes }: Props) => (
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
      {restaurantes.map((restaurantes) => (
        <HeaderMenuItem
          key={restaurantes.id}
          title={restaurantes.title}
          tags={restaurantes.tags}
        />
      ))}
    </ImagemFundo>
  </div>
)
