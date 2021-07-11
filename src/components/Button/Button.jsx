import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";

const BtnDefault = styled.button`
  background-color: ${theme.primary.def};
  color: ${theme.white};
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    opacity: 0.85;
  }
`;

const BtnLink = styled.button`
  background-color: transparent;
  color: inherit;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    color: ${theme.primary.def};

    text-decoration: underline;
  }
`;

const Button = ({ text, type, onClick }) => {
  if (type === "link") {
    return <BtnLink onClick={onClick}>{text}</BtnLink>;
  }
  return <BtnDefault onClick={onClick}>{text}</BtnDefault>;
};

Button.defaultProps = {
  type: "default",
  onClick: undefined,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
