import Tag from '../Tag'
import { ContainerHeader } from './styles'

/* type Props = {
  title: string
  tags: string[]
}

const HeaderMenuItem = ({ title, tags }: Props) => (
  <div className="container">
    <ContainerHeader>
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
      <h1>{title}</h1>
    </ContainerHeader>
  </div>
) */

const HeaderMenuItem = () => (
  <div className="container">
    <ContainerHeader>
      <Tag>Italiana</Tag>
      <h1>La Dolce Vita Trattoria</h1>
    </ContainerHeader>
  </div>
)

export default HeaderMenuItem
