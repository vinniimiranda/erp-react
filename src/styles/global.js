import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    color: #ccc;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
