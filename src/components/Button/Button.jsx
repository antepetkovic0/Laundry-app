import React from "react";
import PropTypes from "prop-types";

import { BtnContainer } from "./styled";

const Button = ({ text }) => {
  const handleButtonClick = () => {
    navigator.serviceWorker.controller.postMessage({
      value: "hello world notify",
    });
  };
  return <BtnContainer onClick={handleButtonClick}>{text}</BtnContainer>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
