import { HeaderPerfil } from '../../containers/HeaderPerfil'
import { Cardapio } from '../../containers/Cardapio'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRestaurante(resp))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil restaurantes={restaurante} />
      <Cardapio restaurante={restaurante} />
    </>
  )
}

export default Perfil
