import RestauranteItem from '../../components/RestauranteItem'
import { Restaurante } from '../../pages/Home'
import { ListaRestaurantes } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

export const Listagem = ({ restaurantes }: Props) => (
  <ListaRestaurantes className="container">
    {restaurantes.map((restaurante) => (
      <li key={restaurante.id}>
        <RestauranteItem
          titulo={restaurante.titulo}
          capa={restaurante.capa}
          tipo={restaurante.tipo}
          descricao={restaurante.descricao}
          avaliacao={restaurante.avaliacao}
          id={restaurante.id}
          destacado={restaurante.destacado}
          cardapio={restaurante.cardapio}
        />
      </li>
    ))}
  </ListaRestaurantes>
)
