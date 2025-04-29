import pizza from "../../assets/images/pizza.png"
import { Button, Container, Title } from "./styles"

const ProfileProduct = () => {
  return (
    <Container>
      <img src={pizza} alt="Pizza de Marguerita" />
      <Title>Pizza Marguerita</Title>
      <p>
        A clássica Marguerita: molho de tomate <br />
        suculento, mussarela derretida, manjericão <br />
        fresco e um toque de azeite. Sabor e <br />
        simplicidade!
      </p>
      <Button>Adicionar ao carrinho</Button>
    </Container>
  )
}

export default ProfileProduct
