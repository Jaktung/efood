import { Food } from "../../pages/Home";
import Product from "../Product";
import { List, ProductListGrid } from "./styles";

type Props = {
  foods: Food[];
};

const ProductList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = [];

    if (food.tipo) {
      tags.push(food.tipo);
    }

    if (food.destacado) {
      tags.push("Destaque");
    }

    return tags;
  };

  return (
    <ProductListGrid>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            average={food.avaliacao}
            description={food.descricao}
            image={food.capa}
            title={food.titulo}
            infos={getFoodTags(food)}
            id={food.id}
          />
        ))}
      </List>
    </ProductListGrid>
  );
};

export default ProductList;
