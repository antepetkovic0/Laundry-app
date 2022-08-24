import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../styled/theme";
import { BUTTON_TYPE } from "./buttonType";

// TODO check how to pass isLoading prop from subtle and link button to button base
const ButtonBase = styled.button`
  background-color: ${theme.primary.def};
  color: ${theme.white};
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;

  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: -webkit-fill-available;
  `}

  ${({ isLoading }) =>
    isLoading &&
    `
      &::before {
      content: "";
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.8rem;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;

      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    }
  `}
`;

const ButtonSubtle = styled(ButtonBase)`
  background-color: ${theme.neutral.two};
  color: ${theme.text.alt};
`;

const ButtonLink = styled.button`
  background-color: transparent;
  color: inherit;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    color: ${theme.primary.def};

    text-decoration: underline;
  }
`;

// TODO add isDisabled prop
const Button = ({ text, type, onClick, isLoading, fullWidth }) => {
  if (type === BUTTON_TYPE.LINK) {
    return <ButtonLink onClick={onClick}>{text}</ButtonLink>;
  }

  if (type === BUTTON_TYPE.SUBTLE) {
    return <ButtonSubtle onClick={onClick}>{text}</ButtonSubtle>;
  }

  return (
    <ButtonBase
      type="submit"
      onClick={onClick}
      isLoading={isLoading}
      fullWidth={fullWidth}
    >
      {text}
    </ButtonBase>
  );
};

Button.defaultProps = {
  type: BUTTON_TYPE.DEFAULT,
  isLoading: false,
  fullWidth: false,
  onClick: () => null,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
