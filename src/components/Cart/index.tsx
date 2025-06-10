import { CartContainer, Overlay, SideBar, ListItem, Texts } from "./styles";
import { Button } from "../../styles";

import { close, remove } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { formatarParaBRL } from "../Product";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <ListItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatarParaBRL(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </ListItem>
          ))}
        </ul>
        <Texts>
          <p>Valor total</p>
          <p>{formatarParaBRL(getTotalPrice())}</p>
        </Texts>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
