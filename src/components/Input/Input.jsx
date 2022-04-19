import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import Icon from "../Icon/Icon";

export const Group = styled.div`
  position: relative;
`;

const Field = styled.input`
  width: 100%;
  min-height: 38px;
  /* font-size: 16px; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 2px 10px;
  border-radius: 4px;
  padding-right: ${(props) => {
    if (props.hasIcon) {
      return "34px";
    }
    return "10px";
  }};
  border: 1px solid hsl(0, 0%, 80%);

  &:focus {
    /* outline-color: #2684ff; */
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

const IconWrapper = styled.div`
  position: absolute;
  right: 6px;
  bottom: 7px; // = 38/2 - 24/2
  height: 24px;
  fill: ${theme.gray.medium};

  &:hover {
    fill: ${theme.gray.dark};
  }
`;

const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
  iconName,
  onIconClick,
}) => (
  <Group>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={name}
      hasIcon={iconName}
    />
    {iconName && (
      <IconWrapper onClick={onIconClick}>
        <Icon name={iconName} />
      </IconWrapper>
    )}
  </Group>
);

Input.defaultProps = {
  value: undefined,
  placeholder: "",
  label: "",
  iconName: "",
  onIconClick: () => null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  iconName: PropTypes.string,
  onIconClick: PropTypes.func,
};

export default Input;
