import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";
import { theme } from "../../styled/theme";

export const DashWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  min-height: 100vh;
  background-color: ${theme.bg.alt};

  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 0 1rem 0;

  @media ${breakpoint.tablet} {
    padding: 0 0 1rem 1rem;
  }
`;
