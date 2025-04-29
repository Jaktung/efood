import styled from "styled-components"
import banner from "../../assets/images/banner.png"
import retangulo from "../../assets/images/retangulo.png"
import { cores } from "../../styles"

export const BannerContainer = styled.div`
  background-image: url(${banner});
  height: 280px;
`

export const BlackOpacity = styled.div`
  background-image: url(${retangulo});
  height: 280px;
`

export const Content = styled.div`
  padding-top: 24px;
  color: ${cores.branco};

  p {
    margin-bottom: 156px;
    font-size: 32px;
    font-weight: 100;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
