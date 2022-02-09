import React from "react";
import { useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "../../components/BackDrop/BackDrop";
import GetStarted from "./components/GetStarted/GetStarted";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";

const Home = () => {
  const { drawerHome } = useSelector((state) => state);

  return (
    <>
      <NavBar />
      <SideDrawer />
      {drawerHome && <BackDrop />}
      <GetStarted />
      <HowItWorks />
      <Features />
    </>
  );
};

export default Home;
