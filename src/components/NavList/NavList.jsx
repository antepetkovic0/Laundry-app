import React from "react";
import PropTypes from "prop-types";
import { Ul } from "./styled";
import Button from "../Button/Button";

const NavList = () => (
  <Ul>
    <li>
      <a href="#get-started">Get started</a>
    </li>
    <li>How it works</li>
    <li>Features</li>
    <Button text="Sign Up" handleButtonClick={() => console.log("clc")} />
  </Ul>
);

NavList.propTypes = {};

export default NavList;
