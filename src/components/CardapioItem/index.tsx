import { Link } from 'react-router-dom'
import {
  Botao,
  CardapioContainer,
  ContainerInfo,
  Descricao,
  ImageCover,
  ItemInfoModal,
  ItemModal,
  Modal,
  ModalContent
} from './styles'
import { useState } from 'react'
import close from '../../assets/close.png'
import { formataPreco } from '../../containers/Cardapio'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

interface ModalState {
  isVisible: boolean
}

export const CardapioItem = ({
  nome,
  descricao,
  foto,
  porcao,
  preco
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
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  return (
    <li>
      <CardapioContainer>
        <ImageCover>
          <img src={foto} alt={nome} />
        </ImageCover>
        <ContainerInfo>
          <h2>{nome}</h2>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Link to={'#'}>
            <Botao
              onClick={() =>
                setModal({
                  isVisible: true
                })
              }
            >
              Mais detalhes
            </Botao>
          </Link>
        </ContainerInfo>
      </CardapioContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          <ItemModal>
            <div>
              <img key={nome} src={foto} alt={nome} />
            </div>
            <ItemInfoModal>
              <h2>{nome}</h2>
              <p>
                {descricao}
                <br />
                <br />
                <span>Serve: {porcao}</span>
              </p>
              <button type="button">
                Adicionar ao carrinho - <span>{formataPreco(preco)}</span>
              </button>
            </ItemInfoModal>
          </ItemModal>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </li>
  )
}
