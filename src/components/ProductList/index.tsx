import { Food } from "../../pages/Home";
import Product from "../Product";

import { ContainerGrid } from "./styles";

type CardapioItem = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  porcao: string;
};

type Props = {
  foods: CardapioItem[];
};

const ProductList = ({ foods }: Props) => {
  return (
    <>
      <ContainerGrid className="container">
        {foods.map((food) => (
          <li key={food.id}>
            <Product
              title={food.nome}
              image={food.foto}
              preco={food.preco}
              id={food.id}
              description={food.descricao}
              porcao={food.porcao}
            />
          </li>
        ))}
      </ContainerGrid>
    </>
  );
};

export default ProductList;
