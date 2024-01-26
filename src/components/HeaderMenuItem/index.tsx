import Tag from '../Tag'

export type Props = {
  tags: string[]
  title: string
}

const HeaderMenuItem = ({ tags, title }: Props) => (
  <div className="container">
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
    <h1>{title}</h1>
  </div>
)

export default HeaderMenuItem
