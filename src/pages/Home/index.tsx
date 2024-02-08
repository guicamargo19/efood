import { useGetRestaurantesQuery } from '../../services/api'
import { Listagem } from '../../containers/Listagem'
import Header from '../../components/Header'

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
