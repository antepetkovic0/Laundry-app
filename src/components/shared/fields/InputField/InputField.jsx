import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";
import Icon from "../../../core/Icon/Icon";

export const Group = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  padding-right: ${(props) => {
    if (props.hasIcon) {
      return "34px";
    }
    return "10px";
  }};
  border: 1px solid hsl(0, 0%, 80%);

  &:focus {
    outline-color: hsl(0, 0%, 80%);
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: ${theme.text.alt};
  display: block;
  margin-bottom: 0.5rem;
  user-select: none;
  transition: all 0.4s;
`;

const IconBox = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  height: 24px;
  fill: ${theme.gray.medium};

  &:hover {
    fill: ${theme.gray.dark};
  }
`;

const InputField = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  iconName,
  onIconClick,
}) => (
  <Group>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      hasIcon={iconName}
    />
    {iconName && (
      <IconBox onClick={onIconClick}>
        <Icon name={iconName} />
      </IconBox>
    )}
  </Group>
);

InputField.defaultProps = {
  value: "",
  placeholder: "",
  label: "",
  iconName: "",
  onIconClick: () => null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  iconName: PropTypes.string,
  onIconClick: PropTypes.func,
};

export default React.memo(InputField);
