import styled from "styled-components"
import bgImage from "../../assets/images/fundo.png"
import { breakpoints } from "../../styles"

export const HeaderBgImg = styled.div`
  background-image: url(${bgImage});
  background-position: 50%;
  background-size: cover;
  height: 384px;

  @media (max-width: ${breakpoints.desktop}) {
    height: 320px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 280px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;
`

export const LogoImg = styled.img`
  width: 124px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 80px;
    margin-top: 24px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 138px;
  margin-bottom: 40px;
  text-align: center;
`
