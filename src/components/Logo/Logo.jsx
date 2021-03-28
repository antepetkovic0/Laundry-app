import React from 'react';
import logoIcon from '../../assets/images/icon.svg';

import {
  Div,
  IconContainer,
  Icon,
  LogoTitle,
} from './style';


const Logo = () => {
  return (
    <Div>
      <IconContainer>
        <Icon 
          src={logoIcon}
          alt="CleanItUp"
        />
      </IconContainer>
      <LogoTitle>CleanUps</LogoTitle>
    </Div>
  )
};

export default Logo;
