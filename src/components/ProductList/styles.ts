import styled from "styled-components"
import { breakpoints } from "../../styles"

export const ContainerGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 56px;

  li{
    list-style: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* <- centraliza horizontalmente */
    gap: 32px; /* opcional: espaço entre os cards */
    padding: 40px 20px;
  }

  @media (max-width: ${breakpoints.desktop}) {
     grid-template-columns: 1fr 1fr;
  }
`