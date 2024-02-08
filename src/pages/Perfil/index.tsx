import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { Cardapio } from '../../containers/Cardapio'
import {
  useGetCardapioQuery,
  useGetRestauranteIdQuery
} from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetCardapioQuery(id!)
  const { data: restaurante } = useGetRestauranteIdQuery(id!)

  if (restaurante && menu) {
    return (
      <>
        <Header type="headerMenu" restaurantes={restaurante} />
        <Cardapio items={menu} />
      </>
    )
  }
  return <h2>Carregando...</h2>
}

export default Perfil
