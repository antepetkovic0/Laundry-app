import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { closeDrawer } from "../../actions/sideDrawer";

import Button from "../Button/Button";
import Logo from "../Logo/Logo";

import { Div, Li } from "./styled";

const SideDrawer = () => {
  const isDrawerOpen = useSelector((state) => state.sideDrawer);
  const dispatch = useDispatch();

  const handleLinkClicked = () => {
    dispatch(closeDrawer());
  };

  return (
    <Div isOpened={isDrawerOpen}>
      <Logo />
      <nav style={{ marginTop: "1.5rem" }}>
        <ul>
          <Link to="/">
            <Li onClick={handleLinkClicked}>Get Started</Li>
          </Link>
          <Link to="/how-it-works">
            <Li onClick={handleLinkClicked}>How it Works</Li>
          </Link>
          <Link to="/features">
            <Li onClick={handleLinkClicked}>Features</Li>
          </Link>
          <Link to="/contact-us">
            <Li onClick={handleLinkClicked}>Contact</Li>
          </Link>
          <Link to="/sign-in" onClick={handleLinkClicked}>
            <Li>
              <Button text="Sign In" buttonType="primary" />
            </Li>
          </Link>
        </ul>
      </nav>
    </Div>
  );
};

export default SideDrawer;
