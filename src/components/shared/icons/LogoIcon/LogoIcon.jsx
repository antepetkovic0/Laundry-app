import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "../../../../assets/images/icon.svg";

export const LogoText = styled.div`
  margin-left: 0.5rem;
  opacity: 1;
  ${({ hideLogoText }) => hideLogoText && `opacity: 0;`}
  transition: opacity 0.3s ease-in;
`;

const LogoIcon = ({ hideLogoText }) => (
  <div className="logo">
    <div className="logo__icon-box">
      <img className="logo__icon" src={Logo} alt="Logo" />
    </div>
    <LogoText hideLogoText={hideLogoText}>
      <div className="logo__name">CleanZee</div>
      <div className="logo__domain">cleanzee.io</div>
    </LogoText>
  </div>
);

LogoIcon.defaultProps = {
  hideLogoText: false,
};

LogoIcon.propTypes = {
  hideLogoText: PropTypes.bool,
};

export default LogoIcon;
