import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../../../styled/theme";
import Icon from "../../../../../core/Icon/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  height: 18px;
  fill: ${theme.gray.dark};
`;

const Span = styled.span`
  margin-left: 5px;
  text-transform: capitalize;
`;

const OptionLabel = ({ name }) => (
  <Container>
    <IconWrapper>
      <Icon name={name !== "user" ? "business" : "person"} size={18} />
    </IconWrapper>
    <Span>{name}</Span>
  </Container>
);

OptionLabel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OptionLabel;
