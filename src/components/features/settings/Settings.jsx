import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import Icon from "../../core/Icon/Icon";

const Settings = () => {
  const links = useMemo(
    () => [
      {
        to: "settings/account",
        icon: "account",
        title: "Account",
        description: "Change personal information",
      },
      {
        to: "settings/security",
        icon: "lock",
        title: "Security",
        description: "Change password",
      },
      {
        to: "settings/notifications",
        icon: "notifications_outlined",
        title: "Notifications",
        description: "Enable or disable notifications",
      },
      {
        to: "settings/language",
        icon: "language",
        title: "Language",
        description: "Choose default language",
      },
      {
        to: "settings/logout",
        icon: "logout",
        title: "Logout",
      },
    ],
    []
  );

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
        {links.map((link) => (
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
