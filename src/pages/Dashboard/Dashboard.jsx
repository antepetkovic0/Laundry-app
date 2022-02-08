import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import styled from "styled-components";

import { getProfile } from "../../api/auth";
import { getPendingRequests, getUsers } from "../../api/user";
import { getShops } from "../../api/shop";
import { dashboardRoutes } from "./dashRoutes";
import RouteAuth from "../../utils/routeAuth";

import DashNav from "./DashNav";
import DashHead from "./DashHead";
import "../../modal.css";
import { breakpoint } from "../../styled/breakpoint";

const ContentContainer = styled.div`
  padding: 2rem 2rem 6rem;

  @media ${breakpoint.tablet} {
    padding: 2rem 2rem 2rem 6rem;
  }
`;

const Dashboard = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("runnned main");
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (profile && profile.isAuth) {
      if (profile.roleId === 1) {
        dispatch(getUsers());
        dispatch(getPendingRequests());
      }
      dispatch(getShops());
      setIsLoaded(true);
    }
  }, [profile]);

  if (!isLoaded) return <div className="loader" />;
  return (
    <>
      <DashNav />
      <ContentContainer>
        {/* <DashHead /> */}
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
      </ContentContainer>
    </>
  );
};

export default Dashboard;
