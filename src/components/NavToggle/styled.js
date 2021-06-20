import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";
import { theme } from "../../styled/theme";

export const Line = styled.span`
  &,
  &::before,
  &::after {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 3px;
    background-color: ${theme.neutral.four};
    border-radius: 0.5rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border-radius: 100px;
  cursor: pointer;

  /* @media ${breakpoint.laptop} {
    display: none;
  } */

  /* this could also goes inside Line (referring to other components) */
  ${({ isOpened }) =>
    isOpened &&
    `
    ${Line} {
      background-color: transparent;
    };

    ${Line}::before {
      top: 0;
      transform: rotate(45deg);
    };

    ${Line}::after {
      top: 0;
      transform: rotate(-45deg);
    };
  `}
`;
