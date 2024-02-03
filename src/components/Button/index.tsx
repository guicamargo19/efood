import { ButtonContainer, ButtonLink, ButtonProductLink } from './styles'

type Props = {
  type: 'button' | 'product-link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title}>
        {children}
      </ButtonContainer>
    )
  } else if (type === 'product-link') {
    return (
      <ButtonProductLink onClick={onClick} title={title}>
        {children}
      </ButtonProductLink>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
