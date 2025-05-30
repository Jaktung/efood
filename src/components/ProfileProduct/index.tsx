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
import { Food } from "../../pages/Home";
import { useParams } from "react-router-dom";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  preco: number;
  id: number;
  porcao: string;
};

const ProfileProduct = ({
  image,
  title,
  description,
  preco,
  porcao,
}: Props) => {
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
        <p>{description}</p>
        <Button>Adicionar ao carrinho</Button>
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

export default ProfileProduct;
