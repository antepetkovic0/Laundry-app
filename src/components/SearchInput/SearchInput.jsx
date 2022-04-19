import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../Input/Input";

const SearchInput = ({ query, onChange }) => (
  <Input value={query} onChange={onChange} iconName="search" />
);

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
