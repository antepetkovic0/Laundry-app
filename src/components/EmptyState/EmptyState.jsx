/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import ImageEmpty from "../../assets/images/empty_small.jpg";

const EmptyState = ({ message, imgCss }) => (
  <div>
    <div>{message}</div>
    <div>
      <img src={ImageEmpty} alt="Empty" style={{ ...imgCss }} />
    </div>
  </div>
);

EmptyState.defaultProps = {
  message: "",
  imgCss: {},
};

EmptyState.propTypes = {
  message: PropTypes.string,
  imgCss: PropTypes.object,
};

export default EmptyState;
