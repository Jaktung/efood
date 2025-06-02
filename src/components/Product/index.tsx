import {
  Button,
  ButtonModal,
  CloseButton,
  Container,
  MainText,
  ModalContainer,
  ModalContent,
  Title,
} from "./styles";

import close from "../../assets/images/close.png";
import { useState } from "react";
import { getDescription } from "../Restaurant";

type Props = {
  image: string;
  title: string;
  description: string;
  preco: number;
  id: number;
  porcao: string;
};

const Product = ({ image, title, description, preco, porcao }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function formatarParaBRL(valor: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  return (
    <>
      <Container>
        <img onClick={() => setModalIsVisible(true)} src={image} alt={title} />
        <Title>{title}</Title>
        <p>{getDescription(description)}</p>
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
            <ButtonModal>
              Adicionar ao carrinho - {formatarParaBRL(preco)}
            </ButtonModal>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </ModalContainer>
    </>
  );
};

export default Product;
