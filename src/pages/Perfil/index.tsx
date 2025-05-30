import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Food } from "../Home";

import Banner from "../../components/Banner";
import ProfileHeader from "../../components/ProfileHeader";
import ProductList from "../../components/ProductList";

const Perfil = () => {
  const { id } = useParams();

  const [cardapio, setCardapio] = useState<Food["cardapio"]>([]);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => {
        const restaurante = res.find((r: Food) => r.id === Number(id));
        if (restaurante) {
          setCardapio(restaurante.cardapio);
        }
      });
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <Banner />
      <ProductList foods={cardapio} />
    </>
  );
};

export default Perfil;
