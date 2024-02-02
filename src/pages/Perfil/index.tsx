import { HeaderPerfil } from '../../containers/HeaderPerfil'
import { Cardapio } from '../../containers/Cardapio'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (restaurante) {
    return (
      <>
        <HeaderPerfil restaurantes={restaurante} />
        <Cardapio restaurante={restaurante} />
      </>
    )
  }
  return <h2>Carregando...</h2>
}

export default Perfil
