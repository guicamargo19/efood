import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'
import estrela from '../../assets/star.png'
import * as S from './styles'

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
    <S.RestauranteContainer>
      <S.ImageCover src={capa} alt={titulo} />
      <S.Infos>
        {tipo.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Infos>
      <S.ContainerInfo>
        <S.TituloContainer>
          <h2>{titulo}</h2>
          <span>
            {avaliacao} <img src={estrela} alt="Estrela" />
          </span>
        </S.TituloContainer>
        <S.Descricao>{descricao}</S.Descricao>
        <S.ButtonSpace>
          <ButtonLink to={`/perfil/${id}`}>
            <p>Saiba mais</p>
          </ButtonLink>
        </S.ButtonSpace>
      </S.ContainerInfo>
    </S.RestauranteContainer>
  )
}

export default RestauranteItem
