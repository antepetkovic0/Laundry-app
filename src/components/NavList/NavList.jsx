import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavList = ({ url }) => (
  <Ul>
    <Link to={`${url}/`} />
    <li>Get started</li>
    <li>How it works</li>
    <li>Features</li>
    <Button buttonText="Sign Up" handleButtonClick={() => console.log("clc")} />
  </Ul>
);

NavList.propTypes = {};

export default NavList;
