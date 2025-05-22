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
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${cores.branco};
    background-color: ${cores.corPrincipal};
    padding: 32px;
    position: relative;
    z-index: 1;

    img:first-of-type {
        width: 280px;
        height: 280px;
        margin-right: 24px;
        object-fit: cover;
    }

    h3{
        padding-bottom: 16px;
    }

    p{
        margin-bottom: 16px;
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

