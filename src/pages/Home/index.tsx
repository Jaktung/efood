import Header from "../../components/Header";
import { useEffect, useState } from "react";
import RestaurantList from "../../components/RestaurantList";

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
  const [emAlta, setEmAlta] = useState<Food[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setEmAlta(res));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList foods={emAlta} />
      </div>
    </>
  );
};

export default Home;
