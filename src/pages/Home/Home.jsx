import React from "react";
import { useRouteMatch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../styled/theme";

import NavBar from "./components/NavBar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "../../components/BackDrop/BackDrop";
import GetStarted from "./components/GetStarted/GetStarted";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";

const Wrapper = styled.div`
  background-color: ${theme.bg.alt};
`;

// import Icons from "../assets/sprite.svg";
//           <svg
//             className="user-nav__icon"
//             style={{ fill: "rebeccapurple", height: "24px" }}
//           >
//             <use href={`${Icons}#icon-home`} />
//           </svg>

const Home = () => {
  const { path } = useRouteMatch();
  const drawerHome = useSelector((state) => state.drawerHome);
  console.log("route path =>", path);
  return (
    <Wrapper>
      <Route path={path}>
        <NavBar />
        <SideDrawer />
        {drawerHome && <BackDrop />}
        <GetStarted />
        <HowItWorks />
        <Features />
      </Route>
    </Wrapper>
  );
};

export default Home;
