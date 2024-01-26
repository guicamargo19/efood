import { ListaCardapio } from './styles'
import { CardapioItem } from '../../components/CardapioItem'
import Menu from '../../models/Menu'

export type Props = {
  itens: Menu[]
}

export const Cardapio = ({ itens }: Props) => (
  <>
    <ListaCardapio className="container">
      {itens.map((itens) => (
        <CardapioItem
          key={itens.id}
          title={itens.title}
          image={itens.image}
          description={itens.description}
        />
      ))}
    </ListaCardapio>
  </>
)
