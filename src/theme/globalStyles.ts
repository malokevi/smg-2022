import { createGlobalStyle } from "styled-components"

import "./fonts.scss"

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    flex-flow: column;
    min-height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      flex-grow: 2;
      margin: 0;
      display: flex;
      flex-flow: column nowrap;
      color: ${({ theme }) => theme.colors.text.dark};
      font-family: "Poppins", arial, serif;
  
      h1, h2, h3, h4, h5 {
        font-family: "Lato", arial, serif;
        margin: 0;
        font-weight: 700;
      }
  
      h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
      h2 {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
      h3 {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
  
      p, li, ul {
          margin: 0;
          line-height: 1.4;
          font-size: ${({ theme }) => theme.fontSize.md};
          line-height: 1.6;
      }
  
      a {
        text-decoration: none;
        font-style: none;
        color: ${({ theme }) =>
    theme.colors.text.dark}; // todo - create link component

        &:hover {
          color: ${({ theme }) => theme.colors.text.darkHover};
        }
      }
  
      .page-container {
        padding: ${({ theme }) => theme.padding.pageBc} 0 ${({ theme }) =>
    theme.padding.gap};
      }

      button {
        cursor: pointer;
        padding: 0;
      
        &.button-reset {
          background-color: transparent;
          border: none;
        }
      }
  
      button, input, select {
        font-family: "Poppins", arial, serif;
        color: ${({ theme }) => theme.colors.text.dark};
        font-size: ${({ theme }) => theme.fontSize.sm}
      }

      #root {
        display: flex;
        flex-flow: column;
        flex-grow: 2;
      }
    }
  }
`

export default GlobalStyle
