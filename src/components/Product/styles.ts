import styled from "styled-components"
import { breakpoints, Button, cores } from "../../styles"

export const Container = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.bgColor};
  padding: 8px;

  > img {
    width: 100%;
    height: 168px;
    object-fit: cover;
    cursor: pointer;
  }

  ${Button} {
    margin-top: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* <- centraliza horizontalmente */
    text-align: center;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`

export const Description = styled.p`
  line-height: 22px;
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px 0 12px 0;
  }
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

    ${Button} {
      padding: 4px 8px;
      margin-top: 8px;
    }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 960px;
  color: ${cores.branco};
  background-color: ${cores.corPrincipal};
  padding: 32px;
  position: relative;
  z-index: 1;
  border-radius: 8px;

  img:first-of-type {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.4;
  }
`


export const MainText = styled.p`
    padding-bottom: 16px;
`

export const CloseButton = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
`

export const ButtonModal = styled.button`
    background-color: ${cores.corSecundaria};
    color: ${cores.corPrincipal};
    padding: 4px 8px;
    font-size: 14px;
    font-weight: bold;
    border: none;
`

