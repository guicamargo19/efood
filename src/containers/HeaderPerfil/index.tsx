import { HeaderContainer, ImagemFundo } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import HeaderMenuItem from '../../components/HeaderMenuItem'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurantes: Restaurante
}

export const HeaderPerfil = ({ restaurantes }: Props) => {
  return (
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
      <ImagemFundo
        key={restaurantes.id}
        style={{ backgroundImage: `url(${restaurantes.capa})` }}
      >
        <HeaderMenuItem title={restaurantes.titulo} tags={restaurantes.tipo} />
        <div className="overlay"></div>
      </ImagemFundo>
    </div>
  )
}
