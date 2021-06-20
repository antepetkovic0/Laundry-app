import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { openDrawer } from "../../actions/drawer";
import { Button, Line } from "./styled";

const NavToggle = () => {
  // eslint-disable-next-line dot-notation
  const drawerHome = useSelector((state) => state["drawerHome"]);

  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(openDrawer("HOME"));
  };

  return (
    <Button onClick={handleToggleClick} isOpened={drawerHome}>
      <Line />
    </Button>
  );
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
