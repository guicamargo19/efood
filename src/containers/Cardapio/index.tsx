import { ListaCardapio } from './styles'
import { CardapioItem } from '../../components/CardapioItem'
import { MenuItensType } from '../../pages/Perfil'

type Props = {
  items: MenuItensType[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
