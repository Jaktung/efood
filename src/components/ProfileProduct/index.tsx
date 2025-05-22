import { useState } from "react";
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

import pizza from "../../assets/images/pizza.png";
import close from "../../assets/images/close.png";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ProfileProduct = ({ image, title, description }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <Container>
        <img
          onClick={() => setModalIsVisible(true)}
          src={image}
          alt="Pizza de Marguerita"
        />
        <Title>{title}</Title>
        <p>{description}</p>
        <Button>Adicionar ao carrinho</Button>
      </Container>
      <ModalContainer className={modalIsVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <img src={pizza} alt="Imagem de uma pizza" />
          <CloseButton
            onClick={() => setModalIsVisible(false)}
            src={close}
            alt="Imagem de X"
          />
          <div>
            <h3>Pizza Marguerita</h3>
            <MainText>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </MainText>
            <p>
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <ButtonModal>Adicionar ao carrinho - R$ 60,90</ButtonModal>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </ModalContainer>
    </>
  );
};

export default ProfileProduct;
