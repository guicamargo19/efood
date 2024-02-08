import RestauranteItem from '../../components/RestauranteItem'
import { ListaRestaurantes } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

export const Listagem = ({ restaurantes }: Props) => {
  const tagsRestaurante = (restaurantes: Restaurante) => {
    const tags = []

    if (restaurantes.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurantes.tipo) {
      tags.push(
        restaurantes.tipo.charAt(0).toUpperCase() + restaurantes.tipo.slice(1)
      )
    }
    return tags
  }

  return (
    <ListaRestaurantes className="container">
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <RestauranteItem
            titulo={restaurante.titulo}
            capa={restaurante.capa}
            tipo={tagsRestaurante(restaurante)}
            descricao={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
            id={restaurante.id}
          />
        </li>
      ))}
    </ListaRestaurantes>
  )
}
