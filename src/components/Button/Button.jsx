import React from "react";
import PropTypes from "prop-types";

import { BtnContainer } from "./style";

const Button = ({ buttonText }) => {
  const handleButtonClick = () => {
    navigator.serviceWorker.controller.postMessage({
      value: "hello world notify",
    });
  };
  return <BtnContainer onClick={handleButtonClick}>{buttonText}</BtnContainer>;
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
