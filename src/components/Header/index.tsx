import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import Tag from '../Tag'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'
import * as S from './styles'

type Props = {
  restaurantes?: MenuType
  type: 'headerHome' | 'headerMenu'
}

const Header = ({ type, restaurantes }: Props) => {
  const dispatch = useDispatch()
  const { items: itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    if (itens.length === 0) return alert('Seu carrinho está vazio')
    dispatch(open())
  }

  if (type === 'headerHome') {
    return (
      <S.Imagem style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <Link to={'/'}>
            <img src={logo} alt="eFood Logo" />
          </Link>
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </div>
      </S.Imagem>
    )
  } else {
    if (!restaurantes) {
      return <h4>Carregando...</h4>
    }
  }
  return (
    <div>
      <div style={{ backgroundImage: `url(${fundo})` }}>
        <S.HeaderContainer className="container">
          <Link to={'/'}>Restaurantes</Link>
          <img src={logo} alt="Logo eFood" />
          <div onClick={openCart}>
            <span>{itens.length} </span>Produto(s) no carrinho
          </div>
        </S.HeaderContainer>
      </div>
      <S.ImagemFundo
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
      </S.ImagemFundo>
    </div>
  )
}

export default Header
