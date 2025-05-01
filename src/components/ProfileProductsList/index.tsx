import ProfileProduct from "../ProfileProduct"
import { ContainerGrid } from "./styles"
import FoodTwo from "../../models/FoodsTwo"

type Props = {
  foods: FoodTwo[]
}

const ProfileProductList = ({ foods }: Props) => {
  return (
    <ContainerGrid className="container">
      {foods.map((food) => (
        <ProfileProduct
          key={food.id}
          description={food.description}
          image={food.image}
          title={food.title}
        />
      ))}
    </ContainerGrid>
  )
}

export default ProfileProductList
