import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

  *,
  *::before
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-family: "Varela Round", sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;