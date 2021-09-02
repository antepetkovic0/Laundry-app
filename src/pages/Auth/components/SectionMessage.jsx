import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import { theme } from "../../../styled/theme";

const Wrapper = styled.div`
  display: flex;
  border-radius: 0.4rem;
  padding: 1rem 0.5rem;
  background-color: ${theme.error};
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const TextBody = styled.div``;

const SectionMessage = () => (
  <Wrapper>
    <IconWrapper>
      <Icon name="warning" />
    </IconWrapper>
    <TextBody>
      <Title>Warning</Title>
      By deleting this blablabla
    </TextBody>
  </Wrapper>
);

export default SectionMessage;
