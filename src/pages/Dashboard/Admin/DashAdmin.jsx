import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { DashWrapper, Content } from "../style";
import DashNav from "../DashNav";
import DashHead from "../DashHead";
import Settings from "../components/Settings/Settings";
import Logout from "../Logout";

import Overview from "./Overview/Overview";
import Users from "./Users/Users";
import Services from "./Services/Services";
import Pending from "./Pending/Pending";
import Orders from "./Orders/Orders";
import Stats from "./Stats/Stats";
import { verifyAuth } from "../../../api/auth";
import RouteAuth from "../../../utils/routeAuth";

const DashAdmin = (props) => {
  console.log("dashadmin", props);
  // console.log("props", props);
  const { path, url } = useRouteMatch();
  const handleTest = async () => {
    const r = await verifyAuth({ roles: [1, 2] });
    console.log("rrrrrr", r);
  };
  return (
    <DashWrapper>
      <DashNav />
      <Content>
        <DashHead />
        {/* <button type="button" onClick={handleTest}>
          CLick me
        </button> */}
        <Switch>
          <Route path={path} component={Overview} exact />
          <RouteAuth exact path={`${path}/users`} Component={Users} />
          <Route exact path={`${path}/services`} component={Services} />
          <Route exact path={`${path}/pending`} component={Pending} />
          <Route path={`${path}/orders`} component={Orders} />
          <Route path={`${path}/stats`} component={Stats} />
          <Route path={`${path}/settings`} component={Settings} />
          <Route path={`${path}/logout`} component={Logout} />
        </Switch>
      </Content>
    </DashWrapper>
  );
};

export default DashAdmin;
