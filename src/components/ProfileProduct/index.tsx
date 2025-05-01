import { Button, Container, Title } from "./styles"

type Props = {
  image: string
  title: string
  description: string
}

const ProfileProduct = ({ image, title, description }: Props) => {
  return (
    <Container>
      <img src={image} alt="Pizza de Marguerita" />
      <Title>{title}</Title>
      <p>{description}</p>
      <Button>Adicionar ao carrinho</Button>
    </Container>
  )
}

export default ProfileProduct
