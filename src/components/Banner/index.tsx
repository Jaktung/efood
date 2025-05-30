import { useEffect, useState } from "react";
import { Food } from "../../pages/Home";
import { BannerContainer, BlackOpacity, Content, Title } from "./styles";
import { useParams } from "react-router-dom";

const Banner = () => {
  const { id } = useParams();

  const [food, setFood] = useState<Food>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res));
  }, [id]);

  return (
    <BannerContainer style={{ backgroundImage: `url(${food?.capa})` }}>
      <BlackOpacity>
        <Content className="container">
          <p>{food?.tipo}</p>
          <Title>{food?.titulo}</Title>
        </Content>
      </BlackOpacity>
    </BannerContainer>
  );
};

export default Banner;
