import { Food } from "../../pages/Home";
import Product from "../Restaurant";
import { List, ProductListGrid } from "./styles";

type Props = {
  foods: Food[];
};

const RestaurantList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = [];

    if (food.tipo) {
      tags.push(food.tipo);
    }

    if (food.destacado) {
      tags.push("Destaque da semana");
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

export default RestaurantList;
