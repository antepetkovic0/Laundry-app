import React, { useState } from 'react';
import logoIcon from '../../assets/images/icon.svg';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import NavToggle from '../NavToggle/NavToggle';
import Button from '../Button/Button';
import {
  Nav,
  Logo,
  IconContainer,
  Icon,
  LogoText,
  Ul
} from './style';

const NavBar = ({ navPos }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onToggleClick = () => {
    setDrawerOpen(!drawerOpen);
    console.log(drawerOpen);
  };

  return (
    <Nav position={navPos}>
      <NavToggle handleToggleClick={onToggleClick} isDrawerOpen={drawerOpen}/>
      <Logo>
        <LogoText>CleanItUp</LogoText>
        <IconContainer>
          <Icon 
            src={logoIcon}
            alt="CleanItUp"
          />
        </IconContainer>
      </Logo>

      <Ul>
        <li>Get started</li>
        <li>How it works</li>
        <li>Features</li>
        <Button 
          buttonText="Sign Up"
          buttonType="primary"
          handleButtonClick={() => console.log("clc")}
        />
      </Ul>
    </Nav>
  )
};

export default NavBar;
