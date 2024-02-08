import { CardapioItem } from '../../components/CardapioItem'
import { ListaCardapio } from './styles'

type Props = {
  items: MenuItensType[]
}

export const Cardapio = ({ items }: Props) => {
  return (
    <>
      <ListaCardapio className="container">
        {items.map((item) => (
          <li key={item.id}>
            <CardapioItem
              itens={item}
              nome={item.nome}
              porcao={item.porcao}
              preco={item.preco}
              descricao={item.descricao}
              foto={item.foto}
              id={item.id}
            />
          </li>
        ))}
      </ListaCardapio>
    </>
  )
}
