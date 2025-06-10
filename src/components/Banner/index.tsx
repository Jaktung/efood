import { BannerContainer, BlackOpacity, Content, Title } from "./styles";
import { useParams } from "react-router-dom";
import { useGetBannerRestaurantsQuery } from "../../services/api";

const Banner = () => {
  const { id } = useParams();
  const { data: food } = useGetBannerRestaurantsQuery(id!);

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
