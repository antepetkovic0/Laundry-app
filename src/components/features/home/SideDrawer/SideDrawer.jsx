import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";
import Button from "../../../core/Button/Button";
import LogoIcon from "../../../shared/icons/LogoIcon/LogoIcon";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
  max-width: 25rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  background: ${theme.bg.def};
  text-align: center;
  box-shadow: ${({ isOpened }) =>
    (isOpened && "3px 0px 5px rgba(0, 0, 0, 0.2)") || "none"};
  z-index: 200;
  transform: ${({ isOpened }) =>
    (isOpened && "translateX(0)") || "translateX(-100%)"};
  transition: transform 0.3s ease-out;
`;

// TODO change Li from styled components to scss
const Li = styled.li`
  margin: 1rem 0;
  color: ${theme.text.alt};

  a {
    color: inherit;
  }
`;

const SideDrawer = ({ isDrawerOpened, onLinkClick }) => (
  <DrawerContainer isOpened={isDrawerOpened}>
    <LogoIcon />
    <nav className="navigation">
      <ul>
        <Li onClick={onLinkClick}>
          <a href="#get-started">Get Started</a>
        </Li>
        <Li onClick={onLinkClick}>
          <a href="#how-it-works">How it Works</a>
        </Li>
        <Li onClick={onLinkClick}>
          <a href="#features">Features</a>
        </Li>
        <Li onClick={onLinkClick}>Contact</Li>
        <Link to="/auth/sign-in">
          <Li onClick={onLinkClick}>
            <Button text="Sign In" />
          </Li>
        </Link>
      </ul>
    </nav>
  </DrawerContainer>
);

SideDrawer.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default SideDrawer;
