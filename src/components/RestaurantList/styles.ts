import styled from "styled-components"

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
`
