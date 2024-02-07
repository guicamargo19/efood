import * as S from './styles'

type Props = {
  type: 'button' | 'product-link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" title={title}>
        {children}
      </S.ButtonContainer>
    )
  } else if (type === 'product-link' || type === 'submit') {
    return (
      <S.ButtonProductLink onClick={onClick} title={title}>
        {children}
      </S.ButtonProductLink>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
