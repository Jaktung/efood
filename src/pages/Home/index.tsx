import Header from "../../components/Header";

import RestaurantList from "../../components/RestaurantList";

import { useGetRestaurantsQuery } from "../../services/api";

export type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    nome: string;
    foto: string;
    preco: number;
    id: number;
    descricao: string;
    porcao: string;
  }[];
};

const Home = () => {
  const { data: emAlta } = useGetRestaurantsQuery();

  if (emAlta) {
    return (
      <>
        <Header />
        <div className="container">
          <RestaurantList foods={emAlta} />
        </div>
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Home;
