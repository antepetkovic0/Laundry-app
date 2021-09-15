import React from "react";
import { useRouteMatch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "../../components/BackDrop/BackDrop";
import GetStarted from "./components/GetStarted/GetStarted";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";

const Home = () => {
  const { path } = useRouteMatch();
  const { drawerHome } = useSelector((state) => state);

  return (
    <div>
      <Route path={path}>
        <NavBar />
        <SideDrawer />
        {drawerHome && <BackDrop />}
        <GetStarted />
        <HowItWorks />
        <Features />
      </Route>
    </div>
  );
};

export default Home;
