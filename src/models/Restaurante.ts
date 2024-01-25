class Restaurante {
  title: string
  rating: string
  description: string
  tags: string[]
  image: string
  id: number

  constructor(
    id: number,
    rating: string,
    image: string,
    title: string,
    tags: string[],
    description: string
  ) {
    this.id = id
    this.rating = rating
    this.title = title
    this.tags = tags
    this.description = description
    this.image = image
  }
}

export default Restaurante
