import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { clear, close } from '../../store/reducers/cart'
import { closeOrder, openOrder } from '../../store/reducers/order'
import { closePayment, openPayment } from '../../store/reducers/payment'
import { closeDelivery } from '../../store/reducers/delivery'
import { formataPreco } from '../../containers/Cardapio'
import Button from '../Button'
import {
  CardButton,
  CardData,
  CardDataAdress,
  DeliveryContainer,
  DeliveryPaymentContainer,
  OrderContainer,
  PaymentContainer,
  Sidebar
} from './styles'

const Order = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.delivery)
  const { orderOpen } = useSelector((state: RootReducer) => state.order)
  const { paymentOpen } = useSelector((state: RootReducer) => state.payment)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [purchase, { data }] = usePurchaseMutation()

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasErrors = isTouched && isInvalid
    return hasErrors
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }
  const deliveryClose = () => {
    dispatch(closeDelivery())
  }

  const paymentClose = () => {
    dispatch(closePayment())
  }

  const abrirPayment = () => {
    dispatch(openPayment())
  }

  const orderProgress = () => {
    if (form.dirty) {
      alert(form.errors)
      if (form.isValid) {
        dispatch(openOrder())
      }
    }
  }

  const orderClose = () => {
    dispatch(closeOrder())
    dispatch(closePayment())
    dispatch(closeDelivery())
    dispatch(close())
    form.resetForm()
    dispatch(clear())
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter pelo menos 8 caracteres')
        .max(9, 'O CEP precisa ter no máximo 8 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .max(6, 'O número precisa ter no máximo 6 caracteres')
        .required('Campo obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão precisa ter pelo menos 16 caracteres')
        .max(19, 'O número do cartão precisa ter no máximo 16 caracteres')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .max(3, 'O CVV precisa ter no máximo 3 caracteres')
        .required('Campo obrigatório'),
      month: Yup.string()
        .min(2, 'O mês precisa ter pelo menos 2 caracteres')
        .max(2, 'O mês precisa ter no máximo 2 caracteres')
        .required('Campo obrigatório'),
      year: Yup.string()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
        .max(2, 'O ano precisa ter no máximo 2 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            zipCode: values.cep,
            city: values.cidade,
            numberAdress: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  return (
    <>
      {orderOpen && data ? (
        <OrderContainer className={orderOpen ? 'order-open' : ''}>
          <Sidebar>
            <CardData>
              <h2>Pedido realizado - {data.orderId}</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <CardButton>
                <Button
                  type="product-link"
                  title="Clique aqui para finalizar o pedido"
                  onClick={orderClose}
                >
                  Concluir
                </Button>
              </CardButton>
            </CardData>
          </Sidebar>
        </OrderContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <DeliveryPaymentContainer>
            <DeliveryContainer className={deliveryOpen ? 'delivery-open' : ''}>
              <Sidebar>
                <CardData>
                  <h2>Entrega</h2>
                  <label htmlFor="nome">Quem irá receber</label>
                  <input
                    id="nome"
                    value={form.values.nome}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('nome') ? 'error' : ''}
                  />
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    id="endereco"
                    value={form.values.endereco}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('endereco') ? 'error' : ''}
                  />
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    className={checkInputError('cidade') ? 'error' : ''}
                  />
                </CardData>
                <CardDataAdress>
                  <CardData>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      mask="99999-999"
                      id="cep"
                      value={form.values.cep}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cep') ? 'error' : ''}
                    />
                  </CardData>
                  <CardData>
                    <label htmlFor="numero">Número</label>
                    <input
                      id="numero"
                      value={form.values.numero}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('numero') ? 'error' : ''}
                    />
                  </CardData>
                </CardDataAdress>
                <CardData>
                  <label htmlFor="complemento">Complemento (Opcional)</label>
                  <input
                    id="complemento"
                    value={form.values.complemento}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('complemento') ? 'error' : ''}
                  />
                </CardData>
                <CardButton>
                  <Button
                    onClick={abrirPayment}
                    type="product-link"
                    title="Clique aqui para continuar com a entrega"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    onClick={deliveryClose}
                    type="product-link"
                    title="Clique aqui para voltar ao carrinho"
                  >
                    Voltar ao carrinho
                  </Button>
                </CardButton>
              </Sidebar>
            </DeliveryContainer>
            <PaymentContainer className={paymentOpen ? 'payment-open' : ''}>
              <Sidebar>
                <CardData>
                  <h2>
                    Pagamento - valor a pagar{' '}
                    <span>{formataPreco(getTotalPrice())}</span>
                  </h2>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    value={form.values.cardName.toUpperCase()}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('cardName') ? 'error' : ''}
                  />
                </CardData>
                <CardDataAdress>
                  <CardData>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      id="cardNumber"
                      value={form.values.cardNumber}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cardNumber') ? 'error' : ''}
                    />
                  </CardData>
                  <CardData>
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      mask="999"
                      id="cvv"
                      value={form.values.cvv}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cvv') ? 'error' : ''}
                    />
                  </CardData>
                </CardDataAdress>
                <CardDataAdress>
                  <CardData>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      id="month"
                      value={form.values.month}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('month') ? 'error' : ''}
                    />
                  </CardData>
                  <CardData>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      mask="99"
                      id="year"
                      value={form.values.year}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('year') ? 'error' : ''}
                    />
                  </CardData>
                </CardDataAdress>
                <CardButton>
                  <Button
                    type="submit"
                    title="Clique aqui para finalizar o pagamento"
                    onClick={orderProgress}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="product-link"
                    title="Clique aqui para voltar"
                    onClick={paymentClose}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </CardButton>
              </Sidebar>
            </PaymentContainer>
          </DeliveryPaymentContainer>
        </form>
      )}
    </>
  )
}

export default Order
