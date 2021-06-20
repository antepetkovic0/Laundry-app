import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line import/named
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
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
    font-size: 1.6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    background-color: ${theme.bg.def};
  }

  button {
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }

  a {
    color: ${theme.primary.def};
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
