import styled from "styled-components";
import { Button, cores } from "../../styles";

import trash from '../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 1;

    ${Button} {
        max-width: 100%;
        width: 100%;
    }
`

export const SideBar = styled.aside`
    background-color: ${cores.corPrincipal};
    max-width: 360px;
    width: 100%;
    padding: 24px 8px;
    z-index: 1;

    ul {
        padding-bottom: 40px;
    }
`

export const ListItem = styled.li`
    background-color: ${cores.corSecundaria};
    display: flex;
    padding: 8px 8px 12px 8px;
    margin-top: 16px;
    position: relative;

    h3 {
        font-size: 18px;
        padding-bottom: 16px;
    }
    
    img{
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }

    button{
        background-image: url(${trash});
        background-color: transparent;
        width: 16px;
        height: 16px;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
`

export const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${cores.corSecundaria};
    font-weight: bold;
    margin-bottom: 16px;
`
