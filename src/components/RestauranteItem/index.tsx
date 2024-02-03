import estrela from '../../assets/star.png'
import Tag from '../Tag'
import {
  ContainerInfo,
  Descricao,
  ImageCover,
  Infos,
  RestauranteContainer,
  TituloContainer
} from './styles'
import { ButtonLink } from '../Button/styles'

type Props = {
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string[]
  capa: string
  id: number
}

const RestauranteItem = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  capa,
  id
}: Props) => {
  return (
    <RestauranteContainer>
      <ImageCover src={capa} alt={titulo} />
      <Infos>
        {tipo.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Infos>
      <ContainerInfo>
        <TituloContainer>
          <h2>{titulo}</h2>
          <span>
            {avaliacao} <img src={estrela} alt="Estrela" />
          </span>
        </TituloContainer>
        <Descricao>{descricao}</Descricao>
        <ButtonLink to={`/perfil/${id}`}>
          <p>Saiba mais</p>
        </ButtonLink>
      </ContainerInfo>
    </RestauranteContainer>
  )
}

export default RestauranteItem
