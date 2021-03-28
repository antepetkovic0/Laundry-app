import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { openDrawer, closeDrawer } from '../actions/sideDrawer';

import NavBar from "../components/NavBar/NavBar";
import SideDrawer from '../components/SideDrawer/SideDrawer';
import BackDrop from '../components/BackDrop/BackDrop';
import Footer from '../components/ContactUs/ContactUs';

const HomePage = () => {
  let { path } = useRouteMatch();

  const isDrawerOpen = useSelector(state => state.sideDrawer);

  const dispatch = useDispatch();


  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const onNavToggleClick = () => {
  //   setIsDrawerOpen(true);
  // }

  // const onBackDropClick = () => {
  //   setIsDrawerOpen(false);
  // }

  return (
    <Router>
      <div>
        <NavBar />
        <SideDrawer />
        {isDrawerOpen && <BackDrop />}

        <Switch>
          <Route path={path} exact>
            {/* get started */}
          </Route>
          <Route path={`${path}/how-it-works`}>
            {/* how it works */}
          </Route>
          <Route path={`${path}/features`}>
            {/* features */}
          </Route>
          <Route path={`${path}/contact-us`}>
            {/* contact us */}
          </Route>
        </Switch>
        <div style={{height: "1000px", marginTop: "20rem"}}>dsada
          <span style={{color: "white"}}>sdasssssssssssss</span>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

export default HomePage;