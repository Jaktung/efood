import styled from "styled-components"
import bgImage from "../../assets/images/fundo.png"

export const HeaderBgImg = styled.div`
  background-image: url(${bgImage});
  background-position: 50%;
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
`

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 138px;
  margin-bottom: 40px;
  text-align: center;
`
