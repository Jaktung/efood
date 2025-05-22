import styled from "styled-components"
import { cores } from "../../styles"
import { TagContainer } from "../Tag/styles"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branco};
  position: relative;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: 8px;
  border: 1px solid ${cores.corPrincipal};
  border-top: none;

  img {
    width: 16px;
    height: 16px;
  }
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
    padding-right: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`

export const ProductDescription = styled.p`
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled.button`
  display: inline-block;
  color: ${cores.branco};
  background-color: ${cores.corPrincipal};
  text-decoration: none;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 12px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
