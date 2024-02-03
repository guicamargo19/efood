import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import { HeaderContainer, Imagem, ImagemFundo } from './styles'
import { Link } from 'react-router-dom'
import { MenuType } from '../../pages/Perfil'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Tag from '../Tag'

type Props = {
  restaurantes?: MenuType
  type: 'headerHome' | 'headerMenu'
}

const Header = ({ type, restaurantes }: Props) => {
  const dispatch = useDispatch()
  const { items: itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'headerHome') {
    return (
      <Imagem style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <Link to={'/'}>
            <img src={logo} alt="EFood Logo" />
          </Link>
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </div>
      </Imagem>
    )
  } else {
    if (!restaurantes) {
      return <h4>Carregando...</h4>
    }
  }
  return (
    <div>
      <div style={{ backgroundImage: `url(${fundo})` }}>
        <HeaderContainer className="container">
          <Link to={'/'}>Restaurantes</Link>
          <img src={logo} alt="Logo EFood" />
          <div onClick={openCart}>
            <span>{itens.length} </span>Produto(s) no carrinho
          </div>
        </HeaderContainer>
      </div>
      <ImagemFundo
        key={restaurantes.titulo}
        style={{ backgroundImage: `url(${restaurantes.capa})` }}
      >
        <div className="container">
          <div>
            <Tag>{restaurantes.tipo}</Tag>
            <h1>{restaurantes.titulo}</h1>
          </div>
        </div>
        <div className="overlay"></div>
      </ImagemFundo>
    </div>
  )
}

export default Header
