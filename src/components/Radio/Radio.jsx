import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../styled/theme";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0.7rem 0;
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

const Radio = ({ id, name, label, isChecked, onChange }) => {
  console.log("blaba");

  return (
    <Group>
      <Input
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <Label htmlFor={id}>
        <Button />
        {label}
      </Label>
    </Group>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
