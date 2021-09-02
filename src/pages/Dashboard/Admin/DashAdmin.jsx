import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import { getPendingRegistrations } from "../../../api/pending_request";

import { setDashboardData } from "../../../store/actions/dashboard";
import RouteAuth from "../../../utils/routeAuth";

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
import { getUsers } from "../../../api/user";
import { DashWrapper, Content } from "../style";

const DashAdmin = (props) => {
  const { path, url } = useRouteMatch();
  // const handleTest = async () => {
  //   const r = await verifyAuth({ roles: [1, 2] });
  //   console.log("rrrrrr", r);
  // };
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    // get dashboard data from db
    (async () => {
      const response = await getUsers();
      console.log("responseee", response);
      dispatch(setDashboardData(response.data, "users"));

      dispatch(getPendingRegistrations());

      // setUsers(
      //   response.data.map(({ name, phone, email }, i) => ({
      //     name,
      //     phone,
      //     email,
      //     actions: <UserTableActions rowIdx={i} />,
      //   }))
      // );
    })();
  }, []);
  return (
    <DashWrapper>
      {/* <ToastContainer /> */}
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
