import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";

export const Ul = styled.ul`
  list-style: none;
  align-items: center;
  display: none;

  li {
    margin-right: 2rem;
  }

  @media ${breakpoint.laptop} {
    display: flex;
  }
`;
