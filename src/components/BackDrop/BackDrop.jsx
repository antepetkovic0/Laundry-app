import React from "react";
import { useDispatch } from "react-redux";

import { closeDrawer } from "../../actions/sideDrawer";

import { Wrapper } from "./style";

const BackDrop = () => {
  const dispatch = useDispatch();

  const handleBackDropClick = () => {
    dispatch(closeDrawer());
  };

  return <Wrapper onClick={handleBackDropClick} />;
};

export default BackDrop;
