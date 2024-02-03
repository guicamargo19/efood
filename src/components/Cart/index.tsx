import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../containers/Cardapio'
import Button from '../Button'

const Cart = () => {
  const { isOpen, items: itens } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {itens.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p> <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
