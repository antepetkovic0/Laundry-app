import React from 'react';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { openDrawer, closeDrawer } from '../../actions/sideDrawer';
import { Button, Line } from './style';

const NavToggle = () => {
  const isDrawerOpen = useSelector(state => state.sideDrawer);

  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(openDrawer());
  };

  return (
    <Button onClick={handleToggleClick} isOpened={isDrawerOpen} >
      <Line />
    </Button>
  )
};

// NavToggle.propTypes = {
//   isDrawerOpen: PropTypes.bool.isRequired,
//   handleToggleClick: PropTypes.func.isRequired
// };

// Button.propTypes = {
//   isOpened: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default NavToggle;