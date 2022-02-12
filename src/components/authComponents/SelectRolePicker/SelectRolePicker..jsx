import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import OptionLabel from "./OptionLabel";

const SelectRolePicker = ({ onSelectChange }) => {
  const [value, setValue] = useState();

  const options = useMemo(
    () => [
      { value: 2, label: <OptionLabel name="bussines service" /> },
      { value: 3, label: <OptionLabel name="user" /> },
    ],
    []
  );

  const handleSelectChange = (e) => {
    setValue(e);
    onSelectChange(e.value);
  };

  return (
    <Select
      placeholder="Select role"
      value={value}
      onChange={handleSelectChange}
      options={options}
    />
  );
};

SelectRolePicker.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};

export default SelectRolePicker;
