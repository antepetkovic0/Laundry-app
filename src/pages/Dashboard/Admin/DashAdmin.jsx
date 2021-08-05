import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { DashWrapper, Content } from "../style";
import DashNav from "../DashNav";
import DashHead from "../DashHead";
import Settings from "../Settings";
import Logout from "../Logout";

import Overview from "./Overview/Overview";
import Users from "./Users/Users";
import Services from "./Services/Services";
import Pending from "./Pending/Pending";
import Orders from "./Orders/Orders";
import Stats from "./Stats/Stats";

const DashAdmin = (props) => {
  // console.log("props", props);
  const { path, url } = useRouteMatch();
  return (
    <DashWrapper>
      <DashNav />
      <Content>
        <DashHead />
        <Switch>
          <Route exact path={path} component={Overview}>
            <Overview />
          </Route>
          <Route path={`${path}/users`}>
            <Users />
          </Route>
          <Route path={`${path}/services`}>
            <Services />
          </Route>
          <Route path={`${path}/pending`}>
            <Pending />
          </Route>
          <Route path={`${path}/orders`}>
            <Orders />
          </Route>
          <Route path={`${path}/stats`}>
            <Stats />
          </Route>
          <Route path={`${path}/settings`}>
            <Settings />
          </Route>
          <Route path={`${path}/logout`}>
            <Logout />
          </Route>
        </Switch>
      </Content>
    </DashWrapper>
  );
};

export default DashAdmin;
