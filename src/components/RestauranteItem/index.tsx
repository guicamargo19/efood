import { Link } from 'react-router-dom'
import estrela from '../../assets/star.png'
import Tag from '../Tag'
import {
  Botao,
  ContainerInfo,
  Descricao,
  ImageCover,
  Infos,
  RestauranteContainer,
  TituloContainer
} from './styles'

export type Props = {
  title: string
  rating: string
  description: string
  tags: string[]
  image: string
  id: number
}

const RestauranteItem = ({
  title,
  rating,
  description,
  tags,
  image,
  id
}: Props) => (
  <RestauranteContainer>
    <ImageCover src={image} alt={title} />
    <Infos>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Infos>
    <ContainerInfo>
      <TituloContainer>
        <h2>{title}</h2>
        <span>
          {rating} <img src={estrela} alt="Estrela" />
        </span>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Link to={`/perfil/${id}`}>
        <Botao>Saiba mais</Botao>
      </Link>
    </ContainerInfo>
  </RestauranteContainer>
)

export default RestauranteItem
