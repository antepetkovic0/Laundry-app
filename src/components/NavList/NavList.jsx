import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavList = props => {
  return (
    <Ul>
      <Link to={`${url}/`}></Link>
      <li>Get started</li>
      <li>How it works</li>
      <li>Features</li>
      <Button 
        buttonText="Sign Up"
        buttonType="primary"
        handleButtonClick={() => console.log("clc")}
      />
    </Ul>
  )
};

NavList.propTypes = {

};

export default NavList;
