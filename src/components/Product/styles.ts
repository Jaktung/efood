import styled from "styled-components"
import { cores } from "../../styles"

export const ProductContainer = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.corPrincipal};

  img {
    width: 100%;
  }
`

export const Content = styled.div`
  padding: 8px;
`

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 18px;
  }
`

export const ReviewAverage = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`

export const ProductDescription = styled.p`
  line-height: 22px;
  margin: 16px 0;
`

export const Link = styled.a`
  color: ${cores.branco};
  background-color: ${cores.corPrincipal};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`
