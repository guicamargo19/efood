import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { clear, close } from '../../store/reducers/cart'
import { closeOrder, openOrder } from '../../store/reducers/order'
import { closePayment, openPayment } from '../../store/reducers/payment'
import { closeDelivery } from '../../store/reducers/delivery'
import Button from '../Button'
import * as S from './styles'
import { ParseToBrl, getTotalPrice } from '../../utils'

const Order = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.delivery)
  const { orderOpen } = useSelector((state: RootReducer) => state.order)
  const { paymentOpen } = useSelector((state: RootReducer) => state.payment)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasErrors = isTouched && isInvalid
    return hasErrors
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
      if (form.errors.nome) {
        alert(`Nome - ${form.errors.nome}`)
      }
      if (form.errors.endereco) {
        alert(`Endereço - ${form.errors.endereco}`)
      }
      if (form.errors.cidade) {
        alert(`Cidade - ${form.errors.cidade}`)
      }
      if (form.errors.cep) {
        alert(`CEP - ${form.errors.cep}`)
      }
      if (form.errors.numero) {
        alert(`Número - ${form.errors.numero}`)
      }
      if (form.errors.cardName) {
        alert(`Nome no cartão - ${form.errors.cardName}`)
      }
      if (form.errors.cardNumber) {
        alert(`Número do cartão - ${form.errors.cardNumber}`)
      }
      if (form.errors.cvv) {
        alert(`Código CVV - ${form.errors.cvv}`)
      }
      if (form.errors.month) {
        alert(`Mês de vencimento - ${form.errors.month}`)
      }
      if (form.errors.year) {
        alert(`Ano de vencimento - ${form.errors.year}`)
      }
    }
    if (form.isValid) {
      dispatch(openOrder())
    }
    if (!form.dirty) {
      alert('Campos em branco')
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
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .transform((value) => value.replace(/[^\d]/g, ''))
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .required('Campo obrigatório'),
      cardName: Yup.string()
        .transform((value) => value.replace(/[0-9]/g, ''))
        .min(5, 'Mínimo de 5 caracteres e apenas letras')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .transform((value) => value.replace(/[^\d]/g, ''))
        .min(16, 'O número do cartão precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .transform((value) => value.replace(/[^\d]/g, ''))
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      month: Yup.string()
        .transform((value) => value.replace(/[^\d]/g, ''))
        .transform((value) => (value > 1 && value <= 12 ? value : ''))
        .min(2, 'Mês inválido')
        .required('Campo obrigatório'),
      year: Yup.string()
        .transform((value) => value.replace(/[^\d]/g, ''))
        .transform((value) => (value > 23 ? value : ''))
        .min(2, 'Ano inválido')
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
        <S.OrderContainer className={orderOpen ? 'order-open' : ''}>
          <S.Sidebar>
            <S.CardData>
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
              <S.CardButton>
                <Button
                  type="product-link"
                  title="Clique aqui para finalizar o pedido"
                  onClick={orderClose}
                >
                  Concluir
                </Button>
              </S.CardButton>
            </S.CardData>
          </S.Sidebar>
        </S.OrderContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryPaymentContainer>
            <S.DeliveryContainer
              className={deliveryOpen ? 'delivery-open' : ''}
            >
              <S.Sidebar>
                <S.CardData>
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
                </S.CardData>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      mask="99999-999"
                      id="cep"
                      value={form.values.cep}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cep') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="numero">Número</label>
                    <input
                      id="numero"
                      value={form.values.numero}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('numero') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardData>
                  <label htmlFor="complemento">Complemento (Opcional)</label>
                  <input
                    id="complemento"
                    value={form.values.complemento}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('complemento') ? 'error' : ''}
                  />
                </S.CardData>
                <S.CardButton>
                  <Button
                    onClick={abrirPayment}
                    type="product-link"
                    title="Clique aqui para continuar com o pagamento"
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
                </S.CardButton>
              </S.Sidebar>
            </S.DeliveryContainer>
            <S.PaymentContainer className={paymentOpen ? 'payment-open' : ''}>
              <S.Sidebar>
                <S.CardData>
                  <h2>
                    Pagamento - valor a pagar{' '}
                    <span>{ParseToBrl(getTotalPrice(items))}</span>
                  </h2>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    value={form.values.cardName.toUpperCase()}
                    type="text"
                    onChange={form.handleChange}
                    className={checkInputError('cardName') ? 'error' : ''}
                  />
                </S.CardData>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      id="cardNumber"
                      value={form.values.cardNumber}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cardNumber') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      mask="999"
                      id="cvv"
                      value={form.values.cvv}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('cvv') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      id="month"
                      value={form.values.month}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('month') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      mask="99"
                      id="year"
                      value={form.values.year}
                      type="text"
                      onChange={form.handleChange}
                      className={checkInputError('year') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardButton>
                  <Button
                    type="submit"
                    title="Clique aqui para finalizar o pagamento"
                    onClick={orderProgress}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="product-link"
                    title="Clique aqui para voltar a edição de endereço"
                    onClick={paymentClose}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.CardButton>
              </S.Sidebar>
            </S.PaymentContainer>
          </S.DeliveryPaymentContainer>
        </form>
      )}
    </>
  )
}

export default Order
