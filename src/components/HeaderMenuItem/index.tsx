import Tag from '../Tag'

type Props = {
  title: string
  tags: string
}

const HeaderMenuItem = ({ title, tags }: Props) => (
  <div className="container">
    <div>
      <Tag>{tags}</Tag>
      <h1>{title}</h1>
    </div>
  </div>
)

export default HeaderMenuItem
