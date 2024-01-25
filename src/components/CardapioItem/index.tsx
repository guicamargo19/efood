import { Link } from 'react-router-dom'
import {
  Botao,
  CardapioContainer,
  ContainerInfo,
  Descricao,
  ImageCover
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const CardapioItem = ({ title, description, image }: Props) => (
  <CardapioContainer>
    <ImageCover>
      <img src={image} alt={title} />
    </ImageCover>
    <ContainerInfo>
      <h2>{title}</h2>
      <Descricao>{description}</Descricao>
      <Link to={'#'}>
        <Botao>Adicionar ao carrinho</Botao>
      </Link>
    </ContainerInfo>
  </CardapioContainer>
)
