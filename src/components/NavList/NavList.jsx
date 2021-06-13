import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavList = ({ url }) => (
  <>
    <Link to={`${url}/`} />
    <li>Get started</li>
    <li>How it works</li>
    <li>Features</li>
    <Button text="Sign Up" handleButtonClick={() => console.log("clc")} />
  </>
);

NavList.propTypes = {};

export default NavList;
