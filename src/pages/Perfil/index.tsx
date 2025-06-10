import { useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import ProfileHeader from "../../components/ProfileHeader";
import ProductList from "../../components/ProductList";
import { useGetFoodByIdQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();
  const { data: restaurante } = useGetFoodByIdQuery(id!);

  if (restaurante) {
    return (
      <>
        <ProfileHeader />
        <Banner />
        <ProductList foods={restaurante?.cardapio} />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Perfil;
