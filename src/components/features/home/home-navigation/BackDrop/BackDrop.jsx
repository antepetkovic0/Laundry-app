/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const BackDrop = ({ onBackDropClick }) => (
  <div className="backdrop" onClick={onBackDropClick} />
);

BackDrop.propTypes = {
  onBackDropClick: PropTypes.func.isRequired,
};

export default BackDrop;
