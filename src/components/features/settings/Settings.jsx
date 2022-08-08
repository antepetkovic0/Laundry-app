import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styled/theme";
import Icon from "../../core/Icon/Icon";
import { NAVIGATION_LINKS } from "./navigationLinks";

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
`;

const Settings = () => {
  console.log("b");

  return (
    <div className="settings">
      <h2 className="settings__title">Settings</h2>
      <p className="settings__description">Keep your account up to date</p>
      <img
        className="settings__img"
        src="/img/settings_small.jpg"
        alt="Settings"
      />
      <nav className="navigation">
        {NAVIGATION_LINKS.map((link) => (
          <Link className="navigation__item" to={link.to}>
            <div className="navigation__icon">
              <Icon name={link.icon} />
            </div>
            <div className="navigation__text">
              <h4>{link.title}</h4>
              {link.description && <p>{link.description}</p>}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Settings;
