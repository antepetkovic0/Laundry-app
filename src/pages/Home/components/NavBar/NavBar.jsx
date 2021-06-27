import React from "react";
import styled from "styled-components";

import Logo from "../../../../components/Logo/Logo";
import NavToggle from "../../../../components/NavToggle/NavToggle";

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

const NavBar = () => (
  <Nav>
    <Logo />
    <NavToggle forDrawerType="drawerHome" />
  </Nav>
);

export default NavBar;
