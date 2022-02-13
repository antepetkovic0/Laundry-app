import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: fill-available;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationBar = () => (
  <Nav>
    <Logo />
    <Hamburger />
  </Nav>
);

export default NavigationBar;
