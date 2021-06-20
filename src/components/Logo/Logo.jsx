import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import LogoIcon from "../../assets/images/icon.svg";

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
`;

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const LogoText = styled.div`
  margin-left: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.neutral.four};
`;

export const Domain = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.text.def};
`;

const Logo = () => (
  <Div>
    <IconWrapper>
      <Icon src={LogoIcon} alt="Logo" />
    </IconWrapper>
    <LogoText>
      <Title>CleanZee</Title>
      <Domain>cleanzee.io</Domain>
    </LogoText>
  </Div>
);

export default Logo;
