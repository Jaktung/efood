import { CartContainer, Overlay, SideBar, ListItem, Texts } from "./styles";

import pizza from "../../assets/images/pizza.png";
import { Button } from "../../styles";

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <ListItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <p>Preco</p>
            </div>
            <button type="button" />
          </ListItem>
          <ListItem>
            <img src={pizza} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <p>Preco</p>
            </div>
          </ListItem>
        </ul>
        <Texts>
          <p>Valor total</p>
          <p>valor</p>
        </Texts>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
