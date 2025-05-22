import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileProductList from "../../components/ProfileProductsList";
import { Food } from "../Home";

const Perfil = () => {
  const [infos, setInfos] = useState<Food[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setInfos(res));
  }, []);

  return (
    <>
      <ProfileHeader />
      <Banner />
      <ProfileProductList foods={infos} />
    </>
  );
};

export default Perfil;
