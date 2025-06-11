import styled, { createGlobalStyle } from "styled-components"

export const cores = {
  corPrincipal: "#E66767",
  bgColor: "#FFF8F2",
  branco: "#FFFFFF",
  corSecundaria: "#FFEBD9",
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    color: ${cores.corPrincipal};
    background-color: ${cores.bgColor};
    text-decoration: none;
  

    p{
        font-size: 14px;
        line-height: 22px;
    }
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 95%;
    }
  }

  button:hover{
    cursor: pointer;
  }
`

export const Button = styled.button`
  color: ${cores.corPrincipal};
  background-color: ${cores.corSecundaria};
  padding: 4px 84px;
  font-size: 14px;
  font-weight: bold;
  border: none;
`

export default GlobalStyles
