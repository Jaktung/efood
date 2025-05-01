import {
  Button,
  Card,
  Content,
  Infos,
  ProductDescription,
  ProductHeader,
  ReviewAverage,
} from "./styles"

import { Link } from "react-router-dom"

import estrela from "../../assets/images/favorito.png"
import Tag from "../Tag"

type Props = {
  image: string
  title: string
  average: number
  description: string
  infos: string[]
}

const Product = ({ image, title, average, description, infos }: Props) => (
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
      <ProductDescription>{description}</ProductDescription>
      <Link to="perfil">
        <Button>Saiba mais</Button>
      </Link>
    </Content>
  </Card>
)

export default Product
