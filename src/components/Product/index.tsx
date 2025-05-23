import {
  Button,
  Card,
  Content,
  Infos,
  ProductDescription,
  ProductHeader,
  ReviewAverage,
} from "./styles";

import { Link, useParams } from "react-router-dom";

import estrela from "../../assets/images/favorito.png";
import Tag from "../Tag";

type Props = {
  image: string;
  title: string;
  average: number;
  description: string;
  infos: string[];
  id: number;
};

const Product = ({ image, title, average, description, infos, id }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 300) + "...";
    }
    return description;
  };

  return (
    <Card>
      <img src={image} alt="Foto de sushi" />

      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Content>
        <ProductHeader>
          <h2>{title}</h2>
          <ReviewAverage>
            <span>{average}</span>
            <img src={estrela} alt="foto de estrela" />
          </ReviewAverage>
        </ProductHeader>
        <ProductDescription>{getDescription(description)}</ProductDescription>
        <Link to={`/perfil/${id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </Content>
    </Card>
  );
};

export default Product;
