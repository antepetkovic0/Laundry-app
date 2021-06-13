import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: fill-available;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  /* @media ${breakpoint.tablet} {
    flex-direction: row-reverse;
  } */

  /* transition: all .3s;
  transform: ${({ position }) => `translateY(${position}rem)`}; */
`;
