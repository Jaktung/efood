import ProfileProduct from "../ProfileProduct";
import { ContainerGrid } from "./styles";
import FoodTwo from "../../models/FoodsTwo";

type Props = {
  foods: FoodTwo[];
};

const ProfileProductList = ({ foods }: Props) => {
  return (
    <>
      <ContainerGrid className="container">
        {foods.map((food) => (
          <li key={food.id}>
            <ProfileProduct
              description={food.description}
              image={food.image}
              title={food.title}
            />
          </li>
        ))}
      </ContainerGrid>
    </>
  );
};

export default ProfileProductList;
