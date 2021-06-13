import React from "react";
import LogoIcon from "../../assets/images/icon.svg";

import { Div, IconWrapper, Icon, LogoText, Title, Domain } from "./styled";

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
