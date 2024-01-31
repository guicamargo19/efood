import Tag from '../Tag'
import { ContainerHeader } from './styles'

type Props = {
  title: string
  tags: string
}

const HeaderMenuItem = ({ title, tags }: Props) => (
  <div className="container">
    <ContainerHeader>
      <Tag>{tags}</Tag>
      <h1>{title}</h1>
    </ContainerHeader>
  </div>
)

export default HeaderMenuItem
