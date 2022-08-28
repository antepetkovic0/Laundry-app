import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../styled/theme";
import { TAG_APPEARANCE } from "../../../constants/tagAppearance";

const TagContainer = styled.div`
  display: inline-block;
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ appearance }) => {
    if (appearance === TAG_APPEARANCE.DEFAULT) {
      return `${theme.text.alt}`;
    }
    if (appearance === TAG_APPEARANCE.DANGER) {
      return `${theme.white}`;
    }
    // primary, danger and success
    return `${theme.white}`;
  }};

  background-color: ${({ appearance }) => {
    if (appearance === TAG_APPEARANCE.DEFAULT) {
      return `${theme.neutral.three}`;
    }
    if (appearance === TAG_APPEARANCE.PRIMARY) {
      return `${theme.primary.def}`;
    }
    if (appearance === TAG_APPEARANCE.DANGER) {
      return `${theme.error}`;
    }
    if (appearance === TAG_APPEARANCE.WARNING) {
      return `${theme.warning}`;
    }
    // success
    return `${theme.success}`;
  }};
`;

const Tag = ({ text, appearance }) => (
  <TagContainer appearance={appearance}>{text}</TagContainer>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  appearance: PropTypes.string,
};

Tag.defaultProps = {
  appearance: TAG_APPEARANCE.DEFAULT,
};

export default React.memo(Tag);
