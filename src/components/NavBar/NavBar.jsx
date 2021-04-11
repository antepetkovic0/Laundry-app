import React from "react";

import NavToggle from "../NavToggle/NavToggle";
import Logo from "../Logo/Logo";

import { Nav } from "./style";

const NavBar = () => (
  <Nav>
    <NavToggle />
    <Logo />
  </Nav>
);

export default NavBar;
