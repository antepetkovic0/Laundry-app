import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import { DashWrapper, Content } from "./style";
import DashNav from "./DashNav";
import DashHead from "./DashHead";

import DashAdmin from "./Admin/DashAdmin";

const Dashboard = (props) => {
  console.log(props);
  const p = useRouteMatch();
  console.log(p);
  return (
    <DashWrapper>
      <DashNav />
      <Content>
        <DashHead />
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={DashAdmin} />
            {/* <Route exact path="/dashboard/service" component={Users} />
            <Route exact path="/dashboard/user" component={Services} /> */}
          </Switch>
        </Router>
      </Content>
    </DashWrapper>
  );
};

export default Dashboard;
