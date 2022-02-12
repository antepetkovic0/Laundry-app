import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";

import useDeviceDetect from "../../../../hooks/useDeviceDetect";

import { links } from "./routing";
import SettingsNav from "./SettingsNav";
import Appearance from "./Appearance";
import Account from "./Account";
import Button from "../../../../components/Button/Button";

const DesktopWrapper = styled.div`
  display: flex;
`;

const DesktopSwitchWrapper = styled.div`
  margin-left: 2rem;
  flex: 1;
`;

const Settings = () => {
  const { path, url } = useRouteMatch();

  const { isMobile } = useDeviceDetect();
  if (!isMobile) {
    return (
      <DesktopWrapper>
        <SettingsNav />
        <DesktopSwitchWrapper>
          <Route exact path={path} component={Account} />
          <Route path={`${path}/appearance`} component={Appearance} />
        </DesktopSwitchWrapper>
      </DesktopWrapper>
    );
  }

  return (
    <>
      <Switch>
        <Route exact path={path} component={SettingsNav} />
        <Route path={`${path}/appearance`} component={Appearance} />
      </Switch>
      <Button type="subtle" text="Logout" />
    </>
  );
};

export default Settings;
