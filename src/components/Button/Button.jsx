import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import { ButtonType } from "./buttonType";

const ButtonBase = styled.button`
  background-color: ${theme.primary.def};
  color: ${theme.white};
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    opacity: 0.85;
  }
`;

const ButtonSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
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

const Button = ({ text, type, onClick, isLoading }) => {
  if (type === ButtonType.LINK) {
    return <ButtonLink onClick={onClick}>{text}</ButtonLink>;
  }

  if (type === ButtonType.SUBTLE) {
    return <ButtonSubtle onClick={onClick}>{text}</ButtonSubtle>;
  }

  if (isLoading) {
    return (
      <ButtonBase disabled>
        <ButtonSpinner />
      </ButtonBase>
    );
  }

  return <ButtonBase onClick={onClick}>{text}</ButtonBase>;
};

Button.defaultProps = {
  type: ButtonType.DEFAULT,
  isLoading: false,
  onClick: () => null,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
