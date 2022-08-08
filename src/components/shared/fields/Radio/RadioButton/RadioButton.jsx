import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../../styled/theme";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 1rem 0;
  ${(props) => props.isDisabled && "opacity: 0.25"}
`;

const Button = styled.span`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${theme.primary.def};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  right: 0;

  &::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.primary.def};
    opacity: 0;
    transition: all 0.2s;
  }
`;

const Group = styled.div`
  ${Input}:checked ~ ${Label} ${Button}::after {
    opacity: 1;
  }
`;

const RadioButton = ({
  id,
  name,
  label,
  value,
  onChange,
  isChecked,
  isDisabled,
}) => (
  <Group>
    <Input
      type="radio"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      checked={isChecked}
      disabled={isDisabled}
    />
    <Label htmlFor={id} isDisabled={isDisabled}>
      <Button />
      {label}
    </Label>
  </Group>
);

RadioButton.defaultProps = {
  isDisabled: false,
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
};

export default RadioButton;
