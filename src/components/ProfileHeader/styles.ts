import styled from "styled-components"
import bgImage from "../../assets/images/fundo.png"

export const Header = styled.header`
  background-image: url(${bgImage});
  background-position: 50%;
  padding: 80px;
  display: flex;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 900;
`
