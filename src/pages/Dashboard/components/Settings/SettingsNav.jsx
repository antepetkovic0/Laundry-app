import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import ImageSettings from "../../../../assets/images/settings_small.jpg";
import { theme } from "../../../../styled/theme";

import Icon from "../../../../components/Icon/Icon";

import { links } from "./routing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  /* width: 100%;
  max-height: 300px;
  object-fit: cover; */
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const LiCaret = styled.div`
  display: flex;
  width: 2rem;
  fill: ${theme.text.alt};
  margin-left: 1rem;
  transition: all 0.2s;
`;

const Li = styled(Link)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.bg.def};
  border-radius: 0.4rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:hover ${LiCaret} {
    transform: translateX(0.5rem);
  }
`;

const LiContent = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.text.alt};

  h4 {
    color: ${theme.text.def};
  }
`;

const LiIcon = styled.div`
  background-color: ${({ isDeskActive }) =>
    !isDeskActive ? theme.neutral.two : theme.primary.def};
  fill: ${({ isDeskActive }) =>
    !isDeskActive ? theme.neutral.six : theme.white};
  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const LiText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const SettingsNav = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <h2>Settings</h2>
      <p>Keep your account up to date</p>
      <Img src={ImageSettings} alt="Settings" />
      <Nav>
        {links.map(({ to, icon, title, desc }) => (
          <Li to={to}>
            <LiContent>
              <LiIcon isDeskActive={false}>
                <Icon name={icon} />
              </LiIcon>
              <LiText>
                <h4>{title}</h4>
                <p>{desc}</p>
              </LiText>
            </LiContent>
            <LiCaret>
              <Icon name="next" />
            </LiCaret>
          </Li>
        ))}
      </Nav>
    </Wrapper>
  );
};

export default SettingsNav;
