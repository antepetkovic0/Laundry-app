import React, { useState } from "react";

import Logo from "../../components/Logo/Logo";
import Hamburger from "../../components/features/home/home-navigation/Hamburger/Hamburger";
import SideDrawer from "../../components/features/home/home-navigation/SideDrawer/SideDrawer";
import BackDrop from "../../components/features/home/home-navigation/BackDrop/BackDrop";
import GetStartedSection from "../../components/features/home/GetStartedSection/GetStartedSection";
import HowItWorksSection from "../../components/features/home/HowItWorksSection/HowItWorksSection";
import FeaturesSection from "../../components/features/home/FeaturesSection/FeaturesSection";

const Home = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpened(true);
  };

  return (
    <>
      <nav className="home-navigation-bar">
        <Logo />
        <Hamburger
          onHamburgerClick={handleOpenDrawer}
          isDrawerOpened={isDrawerOpened}
        />
      </nav>
      <SideDrawer
        onLinkClick={handleCloseDrawer}
        isDrawerOpened={isDrawerOpened}
      />
      {isDrawerOpened && <BackDrop onBackDropClick={handleCloseDrawer} />}
      <GetStartedSection />
      <HowItWorksSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
