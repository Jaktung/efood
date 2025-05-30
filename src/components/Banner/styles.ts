import styled from "styled-components"
import retangulo from "../../assets/images/retangulo.png"
import { cores } from "../../styles"

type BannerContainerProps = {
  backgroundImage?: string;
}

export const BannerContainer = styled.div<BannerContainerProps>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;

  ::first-letter {
    text-transform: uppercase;
  }
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
