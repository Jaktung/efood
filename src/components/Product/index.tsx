import {
  CloseButton,
  Container,
  Description,
  MainText,
  ModalContainer,
  ModalContent,
  Title,
} from "./styles";
import { Button } from "../../styles";

import close from "../../assets/images/close.png";

import { useState } from "react";
import { getDescription } from "../Restaurant";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

type Props = {
  image: string;
  title: string;
  description: string;
  preco: number;
  id: number;
  porcao: string;
};

export function formatarParaBRL(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

const Product = ({ image, title, description, preco, porcao, id }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      add({
        id,
        nome: title,
        descricao: description,
        preco,
        foto: image,
        porcao: porcao,
      })
    );
  };

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <Container>
        <img onClick={() => setModalIsVisible(true)} src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescription(description)}</Description>
        <Button onClick={() => setModalIsVisible(true)}>
          Adicionar ao carrinho
        </Button>
      </Container>
      <ModalContainer className={modalIsVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <img src={image} alt={`Imagem de ${title}`} />
          <CloseButton
            onClick={() => setModalIsVisible(false)}
            src={close}
            alt="Imagem de X"
          />
          <div>
            <h3>{title}</h3>
            <MainText>{description}</MainText>
            <p>
              <span>Serve: de {porcao}</span>
            </p>
            <Button
              onClick={() => {
                addToCart();
                openCart();
              }}
            >
              Adicionar ao carrinho - {formatarParaBRL(preco)}
            </Button>
          </div>
        </ModalContent>
        <div onClick={() => setModalIsVisible(false)} className="overlay"></div>
      </ModalContainer>
    </>
  );
};

export default Product;
