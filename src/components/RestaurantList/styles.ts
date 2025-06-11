import styled from "styled-components"
import { breakpoints } from "../../styles"

export const ProductListGrid = styled.div`
  margin-top: 80px;
  margin-bottom: 120px;

 ::first-letter {
    text-transform: uppercase;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 28px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* <- centraliza horizontalmente */
    gap: 32px; /* opcional: espaço entre os cards */
    padding: 40px 20px;
  }
  
`
