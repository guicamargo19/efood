import { Listagem } from '../../containers/Listagem'
import Header from '../../components/Header'
import { useGetRestaurantesQuery } from '../../services/api'
import { MenuItensType } from '../Perfil'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItensType[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header type="headerHome" />
        <Listagem restaurantes={restaurantes} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
