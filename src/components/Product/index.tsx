import {
  Content,
  Link,
  ProductContainer,
  ProductDescription,
  ProductHeader,
  ReviewAverage,
} from "./styles"

import sushi from "../../assets/images/sushi.png"
import estrela from "../../assets/images/favorito.png"

const Product = () => (
  <ProductContainer>
    <img src={sushi} alt="" />
    <Content>
      <ProductHeader>
        <h2>Hioki Sushi</h2>
        <ReviewAverage>
          <span>4.9</span>
          <img src={estrela} alt="" />
        </ReviewAverage>
      </ProductHeader>
      <ProductDescription>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </ProductDescription>
      <Link href="#">Saiba mais</Link>
    </Content>
  </ProductContainer>
)

export default Product
