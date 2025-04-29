import ProductList from "../../components/ProductList"
import Food from "../../models/Foods"
import sushi from "../../assets/images/sushi.png"
import macarrao from "../../assets/images/macarrao.png"
import Header from "../../components/Header"

const emAlta: Food[] = [
  {
    average: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushi,
    infos: ["Destaques da semana", "Japonesa"],
    title: "Hioki Sushi",
    id: 1,
  },
  {
    average: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
    infos: ["Italiana"],
    title: "La Dolce Vita Trattoria",
    id: 2,
  },
  {
    average: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
    infos: ["Italiana"],
    title: "La Dolce Vita Trattoria",
    id: 3,
  },
  {
    average: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
    infos: ["Italiana"],
    title: "La Dolce Vita Trattoria",
    id: 4,
  },
  {
    average: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
    infos: ["Italiana"],
    title: "La Dolce Vita Trattoria",
    id: 5,
  },
  {
    average: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
    infos: ["Italiana"],
    title: "La Dolce Vita Trattoria",
    id: 6,
  },
]

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ProductList foods={emAlta} />
      </div>
    </>
  )
}

export default Home
