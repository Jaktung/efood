import Product from "../Product"
import { List, ProductListGrid } from "./styles"
import Food from "../../models/Foods"

type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => {
  return (
    <ProductListGrid>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            average={food.average}
            description={food.description}
            image={food.image}
            title={food.title}
            infos={food.infos}
          />
        ))}
      </List>
    </ProductListGrid>
  )
}

export default ProductList
