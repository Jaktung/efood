import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.bgColor};
  padding: 8px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`

export const Description = styled.p`
  line-height: 22px;
  font-weight: 400;
`

export const Button = styled.button`
  color: ${cores.corPrincipal};
  padding: 4px 84px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-top: 8px;
`
