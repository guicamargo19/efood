import { ListaCardapio } from './styles'
import { CardapioItem } from '../../components/CardapioItem'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const Cardapio = ({ restaurante }: Props) => {
  return (
    <>
      <ListaCardapio className="container">
        {restaurante.cardapio.map((item) => (
          <CardapioItem
            key={item.id}
            nome={item.nome}
            foto={item.foto}
            descricao={item.descricao}
            porcao={item.porcao}
            preco={item.preco}
          />
        ))}
      </ListaCardapio>
    </>
  )
}
