import { BannerContainer, BlackOpacity, Content, Title } from "./styles"

const Banner = () => {
  return (
    <BannerContainer>
      <BlackOpacity>
        <Content className="container">
          <p>Italiana</p>
          <Title>La Dolce Vita Trattoria</Title>
        </Content>
      </BlackOpacity>
    </BannerContainer>
  )
}

export default Banner
