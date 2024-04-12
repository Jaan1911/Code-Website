import { createGlobalStyle } from "styled-components";
import 'animate.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --blue-dark: #193A6A;
    --blue-light: #182B47;
    --card-text: #1C103B;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
  }

  body, button, input {
    font-family: 'Nunito', sans-serif;
  }

  button:hover {
    filter: brightness(0.9);
  }
`