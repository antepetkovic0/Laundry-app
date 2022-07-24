import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../../styled/theme";

const Line = styled.span`
  &,
  &::before,
  &::after {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 0.3rem;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border-radius: 100px;
  cursor: pointer;

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

const Hamburger = ({ isDrawerOpened, onHamburgerClick }) => (
  <Button onClick={onHamburgerClick} isOpened={isDrawerOpened}>
    <Line />
  </Button>
);

Hamburger.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
};

export default Hamburger;
