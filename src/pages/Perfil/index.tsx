import Banner from "../../components/Banner";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileProductList from "../../components/ProfileProductsList";
import FoodTwo from "../../models/FoodsTwo";

import pizza from "../../assets/images/pizza.png";

const infos: FoodTwo[] = [
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
  {
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    id: 1,
    title: "Pizza Marguerita",
    image: pizza,
  },
];

const Perfil = () => {
  return (
    <>
      <ProfileHeader />
      <Banner />
      <ProfileProductList foods={infos} />
    </>
  );
};

export default Perfil;
