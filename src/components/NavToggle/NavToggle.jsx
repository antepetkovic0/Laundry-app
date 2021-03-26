import React from 'react';
import PropTypes from "prop-types";
import { Button, Line } from './style';

const NavToggle = ({ handleToggleClick, isDrawerOpen }) => {
  return (
    <Button onClick={handleToggleClick} isOpened={isDrawerOpen}>
      <Line />
    </Button>
  )
};

NavToggle.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleToggleClick: PropTypes.func.isRequired
};

Button.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavToggle;