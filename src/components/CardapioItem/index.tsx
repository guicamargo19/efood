import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'
import close from '../../assets/close.png'
import * as S from './styles'
import { ParseToBrl } from '../../utils'

export type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  itens: MenuItensType
}

interface ModalState {
  isVisible: boolean
}

export const CardapioItem = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao,
  itens
}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 75) {
      return descricao.slice(0, 72) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(itens))
    dispatch(open())
    closeModal()
  }

  return (
    <li>
      <S.CardapioContainer>
        <S.ImageCover>
          <img src={foto} alt={nome} />
        </S.ImageCover>
        <S.ContainerInfo>
          <h2>{nome}</h2>
          <S.Descricao>{getDescricao(descricao)}</S.Descricao>
          <Link to={'#'}>
            <Button
              type="product-link"
              title="Clique aqui para acessar o item"
              onClick={() =>
                setModal({
                  isVisible: true
                })
              }
            >
              Mais detalhes
            </Button>
          </Link>
        </S.ContainerInfo>
      </S.CardapioContainer>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          <S.ItemModal>
            <img key={id} src={foto} alt={nome} />

            <S.ItemInfoModal>
              <h2>{nome}</h2>
              <p>
                {descricao}
                <br />
                <br />
                <span>Serve: {porcao}</span>
              </p>
              <S.ButtonContainer>
                <Button
                  title="Clique para adicionar ao carrinho"
                  type="product-link"
                  onClick={addToCart}
                >
                  Adicionar ao carrinho -
                </Button>
                <span>{ParseToBrl(preco)}</span>
              </S.ButtonContainer>
            </S.ItemInfoModal>
          </S.ItemModal>
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </li>
  )
}
