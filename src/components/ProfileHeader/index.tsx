import logo from "../../assets/images/logo.png"
import { Container, Header, HeaderText } from "./styles"

const ProfileHeader = () => {
  return (
    <Header>
      <Container className="container">
        <HeaderText>Restaurantes</HeaderText>
        <img src={logo} alt="logo da efood" />
        <HeaderText>0 produto(s) no carrinho</HeaderText>
      </Container>
    </Header>
  )
}

export default ProfileHeader
