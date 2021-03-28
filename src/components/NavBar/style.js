import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: fill-available;
  height: 4.5rem;
  padding: 1rem;
  /* background-color: #2f4d75; */
  /* background-color: #804c86; */
  /* background-color: transparent; */
  background: linear-gradient(211deg, rgba(110,36,107,1) 0%, rgba(14,60,123,1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  /* @media ${breakpoint.tablet} {
    flex-direction: row-reverse;
  } */

  /* transition: all .3s;
  transform: ${({ position }) =>
    `translateY(${position}rem)`
  }; */
`;