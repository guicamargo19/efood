import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/delivery'
import Button from '../Button'
import * as S from './styles'
import { ParseToBrl, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items: itens } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const deliveryOpen = () => {
    dispatch(openDelivery())
  }

  const removeItem = (id: number) => {
    if (itens.length === 1) {
      dispatch(close())
    }
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {itens.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{ParseToBrl(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total</p> <span>{ParseToBrl(getTotalPrice(itens))}</span>
        </S.Prices>
        <Button
          onClick={deliveryOpen}
          type="product-link"
          title="Clique aqui para continuar com a entrega"
        >
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
