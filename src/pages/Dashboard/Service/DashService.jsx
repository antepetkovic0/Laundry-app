import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import { setDashboardData } from "../../../store/actions/dashboard";
import { getPendingRegistrations } from "../../../api/pending_request";
import { getUsers } from "../../../api/user";
import RouteAuth from "../../../utils/routeAuth";

import DashNav from "./DashNav";
import DashHead from "../DashHead";
import Logout from "../Logout";
import Settings from "../components/Settings/Settings";

import Overview from "./Overview/Overview";
import Shops from "./Overview/Shops";
import Orders from "../Admin/Orders/Orders";
import Calendar from "./Overview/Calendar";
import Stats from "./Overview/Stats";

import { DashWrapper, Content } from "../style";

const DashService = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    // get dashboard data from db
    (async () => {
      // const response = await getUsers();
      // console.log("responseee", response);
      // dispatch(setDashboardData(response.data, "users"));
      // dispatch(getPendingRegistrations());
    })();
  }, []);

  return (
    <DashWrapper>
      <DashNav />
      <Content>
        <DashHead />
        <Switch>
          <Route path={path} component={Overview} exact />
          <RouteAuth exact path={`${path}/shops`} Component={Shops} />
          <Route exact path={`${path}/calendar`} component={Orders} />
          <Route exact path={`${path}/orders`} component={Calendar} />
          <Route path={`${path}/stats`} component={Stats} />
          <Route path={`${path}/settings`} component={Settings} />
          <Route path={`${path}/logout`} component={Logout} />
        </Switch>
      </Content>
    </DashWrapper>
  );
};

export default DashService;
