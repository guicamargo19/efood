export const getTotalPrice = (itens: MenuItensType[]) => {
  return itens.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco!)
  }, 0)
}

export const ParseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
