import styled from "styled-components"

export const ContainerGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 56px;

  li{
    list-style: none;
  }
`