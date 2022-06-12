import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import appearances from "../../constants/appearances";
import { theme } from "../../styled/theme";

const Container = styled.div`
  display: inline-block;
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ appearance }) => {
    if (appearance === appearances.DEFAULT) {
      return `${theme.text.alt}`;
    }
    if (appearance === appearances.DANGER) {
      return `${theme.text.alt}`;
    }
    // primary, danger and success
    return `${theme.white}`;
  }};

  background-color: ${({ appearance }) => {
    if (appearance === appearances.DEFAULT) {
      return `${theme.neutral.three}`;
    }
    if (appearance === appearances.PRIMARY) {
      return `${theme.primary.def}`;
    }
    if (appearance === appearances.DANGER) {
      return `${theme.error}`;
    }
    if (appearance === appearances.WARNING) {
      return `${theme.warning}`;
    }
    // success
    return `${theme.success}`;
  }};
`;

const Tag = ({ text, appearance }) => (
  <Container appearance={appearance}>{text}</Container>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  appearance: PropTypes.string,
};

Tag.defaultProps = {
  appearance: appearances.DEFAULT,
};

export default React.memo(Tag);
