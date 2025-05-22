import { useEffect, useState } from "react";
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
import { Food } from "../../pages/Home";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res));
  }, []);

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
