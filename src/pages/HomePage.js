import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import BackDrop from "../components/BackDrop/BackDrop";
import Footer from "../components/ContactUs/ContactUs";

import GetStarted from "../components/GetStarted/GetStarted";

import Icons from "../assets/sprite.svg";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Switcher from "../components/Switcher/Switcher";

const HomePage = () => {
  const { path } = useRouteMatch();
  console.log(path);

  const isDrawerOpen = useSelector((state) => state.sideDrawer);

  return (
    <Router>
      <div>
        <NavBar />
        <SideDrawer />
        {isDrawerOpen && <BackDrop />}

        <Switch>
          <Route path={path} component={GetStarted} exact />

          <Route path={`${path}how-it-works`} component={HowItWorks} exact />
          <Route path={`${path}/features`}>{/* features */}</Route>
          <Route path={`${path}/contact-us`}>{/* contact us */}</Route>
        </Switch>
        <div style={{ height: "1000px", marginTop: "20rem" }}>
          <Switcher />
          <a
            href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"
            target="__blank"
          >
            lalal
          </a>
          <svg
            className="user-nav__icon"
            style={{ fill: "rebeccapurple", height: "24px" }}
          >
            <use href={`${Icons}#icon-home`} />
          </svg>
          dsada
          <span style={{ color: "white" }}>sdasssssssssssss</span>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default HomePage;
