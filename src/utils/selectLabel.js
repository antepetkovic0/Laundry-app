import React from "react";
import styled from "styled-components";
import Icon from "../components/Icon/Icon";
import { theme } from "../styled/theme";

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

export const authLabel = (name) => (
  <Container>
    <IconWrapper>
      <Icon name={name !== "user" ? "business" : "person"} size={18} />
    </IconWrapper>
    <Span>{name}</Span>
  </Container>
);
