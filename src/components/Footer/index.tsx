import { Description, Foot, FooterContainer, Logo } from "./styles"

import logo from "../../assets/images/logo.png"
import instagram from "../../assets/images/instagram.svg"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <Logo src={logo} alt="" />
        <div>
          <img src={instagram} alt="logo da efood" />
          <img src={facebook} alt="Instagram" />
          <img src={twitter} alt="" />
        </div>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega,
          <br />
          qualidade dos produtos é toda do estabelecimento contratado.{" "}
        </Description>
      </FooterContainer>
    </Foot>
  )
}

export default Footer
