import React from "react";
import { useSelector } from "react-redux";

import BackDrop from "../components/homeComponents/Navigation/BackDrop";
import NavigationBar from "../components/homeComponents/Navigation/NavigationBar";
import SideDrawer from "../components/homeComponents/Navigation/SideDrawer";
import GetStarted from "../components/homeComponents/GetStarted/GetStarted";
import HowItWorks from "../components/homeComponents/HowItWorks/HowItWorks";
import Features from "../components/homeComponents/Features/Features";

const Home = () => {
  const { drawerHome } = useSelector((state) => state);

  return (
    <>
      <NavigationBar />
      <SideDrawer />
      {drawerHome && <BackDrop />}
      <GetStarted />
      <HowItWorks />
      <Features />
    </>
  );
};

export default Home;
