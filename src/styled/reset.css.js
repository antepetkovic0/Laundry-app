import { createGlobalStyle } from "styled-components";
import { breakpoint } from "./breakpoint";
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

    @media ${breakpoint.tablet} {
      font-size: 71%;
    }

    @media ${breakpoint.laptopL} {
      font-size: 80%;
    }

  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
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

    &:focus {
      outline: none;
    }
  }

  a {
    color: ${theme.primary.def};
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
  }

  p {
    color: ${theme.text.alt}
  }
`;

export default GlobalStyle;
