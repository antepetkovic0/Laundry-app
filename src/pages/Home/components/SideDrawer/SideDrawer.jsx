import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";

import { closeDrawer } from "../../../../actions/drawer";

import Button from "../../../../components/Button/Button";
import Logo from "../../../../components/Logo/Logo";

const Div = styled.div`
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

const Li = styled.li`
  margin: 1rem 0;
  color: ${theme.text.alt};

  a {
    color: inherit;
  }

  &:active,
  &:hover {
    color: ${theme.primary.def};
  }
`;

const SideDrawer = () => {
  const drawerHome = useSelector((state) => state.drawerHome);
  const dispatch = useDispatch();

  const handleLinkClicked = () => {
    console.log("dsada");
    dispatch(closeDrawer("HOME"));
  };

  return (
    <Div isOpened={drawerHome}>
      <Logo />
      <nav style={{ marginTop: "1.5rem" }}>
        <ul>
          <Li onClick={handleLinkClicked}>
            <a href="#get-started">Get Started</a>
          </Li>
          <Li onClick={handleLinkClicked}>
            <a href="#how-it-works">How it Works</a>
          </Li>
          <Li onClick={handleLinkClicked}>
            <a href="#features">Features</a>
          </Li>
          <Li onClick={handleLinkClicked}>Contact</Li>
          <Li>
            <Button text="Sign In" buttonType="primary" />
          </Li>
        </ul>
      </nav>
    </Div>
  );
};

export default SideDrawer;
