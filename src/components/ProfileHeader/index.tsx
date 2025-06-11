import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Container, Header, CartButton, HeaderText, Image } from "./styles";

import { open } from "../../store/reducers/cart";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <Header>
      <Container className="container">
        <HeaderText to="/">Restaurantes</HeaderText>
        <Link to="/">
          <Image src={logo} alt="logo da efood" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Container>
    </Header>
  );
};

export default ProfileHeader;
