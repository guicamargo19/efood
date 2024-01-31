import { Link } from 'react-router-dom'
import {
  Botao,
  CardapioContainer,
  ContainerInfo,
  Descricao,
  ImageCover
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

export const CardapioItem = ({ nome, descricao, foto }: Props) => (
  <li>
    <CardapioContainer>
      <ImageCover>
        <img src={foto} alt={nome} />
      </ImageCover>
      <ContainerInfo>
        <h2>{nome}</h2>
        <Descricao>{descricao}</Descricao>
        <Link to={'#'}>
          <Botao>Adicionar ao carrinho</Botao>
        </Link>
      </ContainerInfo>
    </CardapioContainer>
  </li>
)
