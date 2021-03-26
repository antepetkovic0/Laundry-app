import styled from 'styled-components';
import { breakpoint } from '../../styled/breakpoints';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: fill-available;
  height: 4.5rem;
  padding: 1rem;
  background-color: #2f4d75;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media ${breakpoint.tablet} {
    flex-direction: row-reverse;
  } */

  transition: all .3s;
  transform: ${({ position }) =>
    `translateY(${position}rem)`
  };
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const IconContainer = styled.div`
  width: 4rem;
`;

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const LogoText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-left: .5rem;
  /* font-style: italic; */
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  display: none;


  /* @media ${breakpoint.tablet} {
    display: flex;
  } */
`;