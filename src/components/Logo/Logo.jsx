import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { theme } from "../../styled/theme";
import { useScroll } from "../../hooks/useScrollPosition";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  opacity: 1;
  ${({ shouldHide }) => shouldHide && `opacity: 0;`}
  transition: opacity 0.3s ease-in;
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

const Logo = () => {
  const drawerHome = useSelector((state) => state.drawerHome);

  const scrollPos = useScroll({
    wait: 500,
    element: window,
  });

  const windowSize = useWindowSize();

  // TODO try this with useState
  const shouldHideText = useMemo(() => {
    if (drawerHome) {
      return false;
    }
    if (windowSize.width < 768) {
      return true;
    }
    if (windowSize.width > 768 && scrollPos.y > 600) {
      return true;
    }
    return false;
  }, [drawerHome, scrollPos, windowSize]);

  return (
    <Div>
      <IconWrapper>
        <Icon src={LogoIcon} alt="Logo" />
      </IconWrapper>
      <LogoText shouldHide={shouldHideText}>
        <Title>CleanZee</Title>
        <Domain>cleanzee.io</Domain>
      </LogoText>
    </Div>
  );
};

export default Logo;
