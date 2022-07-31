import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import OptionLabel from "./OptionLabel/OptionLabel";

const RoleSelect = ({ value, onChange }) => {
  const options = useMemo(
    () => [
      { value: 2, label: <OptionLabel name="bussines service" /> },
      { value: 3, label: <OptionLabel name="user" /> },
    ],
    []
  );

  return (
    <Select
      placeholder="Select role"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

RoleSelect.defaultProps = {
  value: undefined,
};

RoleSelect.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default RoleSelect;
