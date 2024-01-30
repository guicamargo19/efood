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
import { Restaurante } from '../../pages/Home'

const RestauranteItem = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  capa,
  id
}: Restaurante) => {
  return (
    <RestauranteContainer>
      <ImageCover src={capa} alt={titulo} />
      <Infos>
        <Tag>{tipo}</Tag>
      </Infos>
      <ContainerInfo>
        <TituloContainer>
          <h2>{titulo}</h2>
          <span>
            {avaliacao} <img src={estrela} alt="Estrela" />
          </span>
        </TituloContainer>
        <Descricao>{descricao}</Descricao>
        <Link to={`/perfil/${id}`}>
          <Botao>Saiba mais</Botao>
        </Link>
      </ContainerInfo>
    </RestauranteContainer>
  )
}

export default RestauranteItem
