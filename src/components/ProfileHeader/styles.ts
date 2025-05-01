import styled from "styled-components"
import bgImage from "../../assets/images/fundo.png"

export const Header = styled.header`
  background-image: url(${bgImage});
  background-position: 50%;
  padding: 80px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-right: 340px;
`

export const HeaderShop = styled.p`
  font-size: 18px;
  font-weight: 900;
`

export const Image = styled.img`
  margin-right: 250px;
`
