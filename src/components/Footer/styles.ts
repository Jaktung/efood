import styled from "styled-components"
import { cores } from "../../styles"

export const Foot = styled.footer`
  background-color: ${cores.corSecundaria};
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin: 40px 0 32px 0;
`

export const Description = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`
