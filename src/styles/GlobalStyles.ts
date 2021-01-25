import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, #root {
    width: 100%;
    min-height: 100vh;
    background-color: #161B22;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
  }
`;

export default GlobalStyle;