import styled from "styled-components"
import bgImage from "../../assets/images/fundo.png"
import { breakpoints, cores } from "../../styles"
import { Link } from "react-router-dom"

export const Header = styled.header`
  background-image: url(${bgImage});
  background-position: 50%;
  padding: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderText = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  margin-right: 340px;
  text-decoration: none;
  color: ${cores.corPrincipal};
`

export const CartButton = styled.p`
  font-size: 18px;
  font-weight: 900;
`

export const Image = styled.img`
  margin-right: 250px;
`
