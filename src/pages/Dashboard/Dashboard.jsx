import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { dashboardRoutes } from "./dashRoutes";
import RouteAuth from "../../utils/routeAuth";
import { getActiveUsers, getPendingRequests } from "../../api/user";

import DashNav from "./DashNav";
import DashHead from "./DashHead";
import { DashWrapper, Content } from "./style";
import { getShops } from "../../api/shop";
import { getProfile } from "../../api/auth";
import "../../modal.css";

const Dashboard = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("runnned");
    dispatch(getProfile()).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) return <div className="loader" />;
  return (
    <DashWrapper>
      <DashNav />
      <Content>
        <DashHead />
        <Switch>
          {dashboardRoutes.map((item) => (
            <RouteAuth
              path={item.path}
              Component={item.component}
              rule={item.rule}
              exact={item.exact}
            />
          ))}
        </Switch>
      </Content>
    </DashWrapper>
  );
};

export default Dashboard;
