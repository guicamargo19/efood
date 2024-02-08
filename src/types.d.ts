declare type MenuItensType = {
  nome: string
  porcao: string
  preco: number
  descricao: string
  foto: string
  id: number
}

declare type MenuType = {
  titulo: string
  tipo: string
  capa: string
}

declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItensType[]
}
