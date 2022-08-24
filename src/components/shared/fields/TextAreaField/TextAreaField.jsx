import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";

export const Group = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  resize: none;

  &:focus {
    outline-color: hsl(0, 0%, 80%);
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  color: ${theme.text.alt};
  display: block;
  margin-bottom: 0.5rem;
  user-select: none;
  transition: all 0.4s;
`;

const TextAreaField = ({ name, label, placeholder, value, onChange }) => (
  <Group>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows="4"
    />
  </Group>
);

TextAreaField.defaultProps = {
  value: "",
  placeholder: "",
  label: "",
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default React.memo(TextAreaField);
