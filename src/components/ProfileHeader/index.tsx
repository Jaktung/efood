import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Container, Header, HeaderShop, HeaderText, Image } from "./styles";

const ProfileHeader = () => {
  return (
    <Header>
      <Container className="container">
        <HeaderText>Restaurantes</HeaderText>
        <Link to="/">
          <Image src={logo} alt="logo da efood" />
        </Link>
        <HeaderShop>0 produto(s) no carrinho</HeaderShop>
      </Container>
    </Header>
  );
};

export default ProfileHeader;
