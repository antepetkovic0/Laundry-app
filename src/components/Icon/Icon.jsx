import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { theme } from "../../styled/theme";

import Icons from "../../assets/sprite.svg";

const Svg = styled.svg`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  /* fill: ${theme.text.alt}; */
  fill: inherit;
  cursor: pointer;

  /* &:hover {
    fill: ${theme.primary.def};
  } */
`;

const Icon = ({ name, size }) => (
  <Svg size={size}>
    <use href={`${Icons}#icon-${name}`} />
  </Svg>
);

Icon.defaultProps = {
  size: 24,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
