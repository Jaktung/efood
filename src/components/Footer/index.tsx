import { Description, Foot, FooterContainer, Logo } from "./styles";

import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <Link to="/">
          <Logo src={logo} alt="logo da efood" />
        </Link>
        <div>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </div>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega,
          <br />
          qualidade dos produtos é toda do estabelecimento contratado.{" "}
        </Description>
      </FooterContainer>
    </Foot>
  );
};

export default Footer;
