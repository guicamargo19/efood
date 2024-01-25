class Menu {
  title: string
  description: string
  image: string
  id: number

  constructor(id: number, image: string, title: string, description: string) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Menu
