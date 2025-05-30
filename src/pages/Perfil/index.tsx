import { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileProductList from "../../components/ProfileProductsList";
import { Food } from "../Home";
import { useParams } from "react-router-dom";

const Perfil = () => {
  const { id } = useParams();

  const [infos, setInfos] = useState<Food[]>([]);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setInfos(res));
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <Banner />
      <ProfileProductList foods={infos} />
    </>
  );
};

export default Perfil;
