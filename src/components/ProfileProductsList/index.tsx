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
        {foods.map((food) => (
          <li key={food.cardapio[0].id}>
            <ProfileProduct
              title={food.cardapio[0].nome}
              image={food.cardapio[0].foto}
              preco={food.cardapio[0].preco}
              id={food.cardapio[0].id}
              description={food.cardapio[0].descricao}
              porcao={food.cardapio[0].porcao}
            />
          </li>
        ))}
      </ContainerGrid>
    </>
  );
};

export default ProfileProductList;
