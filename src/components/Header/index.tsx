import logo from "../../assets/images/logo.png"
import { HeaderBgImg, HeaderContent, LogoImg, Title } from "./styles"

const Header = () => {
  return (
    <HeaderBgImg>
      <HeaderContent className="container">
        <LogoImg src={logo} alt="logo da efood" />
        <Title>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Title>
      </HeaderContent>
    </HeaderBgImg>
  )
}

export default Header
