import React, { useState } from 'react';

import NavToggle from '../NavToggle/NavToggle';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import {
  Nav,
  Ul
} from './style';

const NavBar = () => {
  return (
    <Nav>
      <NavToggle />    
      <Logo />
    </Nav>
  )
};

export default NavBar;
