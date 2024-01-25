import RestauranteItem from '../../components/RestauranteItem'
import Restaurante from '../../models/Restaurante'
import { ListaRestaurantes } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

export const Listagem = ({ restaurantes }: Props) => (
  <ListaRestaurantes>
    {restaurantes.map((restaurante) => (
      <RestauranteItem
        key={restaurante.id}
        title={restaurante.title}
        image={restaurante.image}
        tags={restaurante.tags}
        description={restaurante.description}
        rating={restaurante.rating}
      />
    ))}
  </ListaRestaurantes>
)
