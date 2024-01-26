import { Listagem } from '../../containers/Listagem'
import Restaurante from '../../models/Restaurante'
import sushi from '../../assets/japones.png'
import italia from '../../assets/italiano.png'
import saiseriya from '../../assets/saizeryia.jpg'
import guioza from '../../assets/saizeryia.jpg'
import jolly from '../../assets/jolly.jpg'
import miya from '../../assets/miya.jpg'
import { Header } from '../../components/Header'

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italia,
    tags: ['Italiana'],
    rating: '4.6'
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    tags: ['Destaque da semana', 'Japonês'],
    rating: '4.9'
  },
  {
    id: 3,
    title: 'Saizeryia',
    description:
      'Culinária italiana com toques do Japão no conforto da sua casa! Pastas de diversos sabores e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: saiseriya,
    tags: ['Italiana'],
    rating: '4.6'
  },
  {
    id: 4,
    title: 'Jolly Pasta',
    description:
      'O melhor da culinária italiana no conforto da sua casa! Todos os tipos de pastas e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: jolly,
    tags: ['Italiana'],
    rating: '4.9'
  },
  {
    id: 5,
    title: 'Guioza no Osho',
    description:
      'Guioza no Osho tem raízes chinesas mas se tornou uma parte rica na culinária japonesa com o tempo. Peça já guiozas, rámen e pratos especiais irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: guioza,
    tags: ['Japonês'],
    rating: '4.5'
  },
  {
    id: 6,
    title: 'Steak no Miya',
    description:
      'O melhor da carne no Japão. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: miya,
    tags: ['Japonês'],
    rating: '4.8'
  }
]

const Home = () => (
  <>
    <Header />
    <Listagem restaurantes={restaurantes} />
  </>
)

export default Home
