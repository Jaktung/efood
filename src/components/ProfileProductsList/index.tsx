import { Food } from "../../pages/Home";
import ProfileProduct from "../ProfileProduct";

import { ContainerGrid } from "./styles";

type Props = {
  foods: Food[];
};

const ProfileProductList = ({ foods }: Props) => {
  return (
    <>
      <ContainerGrid className="container">
        {foods.map((food) =>
          food.cardapio.map((item) => (
            <li key={item.id}>
              <ProfileProduct
                title={item.nome}
                image={item.foto}
                preco={item.preco}
                id={item.id}
                description={item.descricao}
                porcao={item.porcao}
              />
            </li>
          ))
        )}
      </ContainerGrid>
    </>
  );
};

export default ProfileProductList;
