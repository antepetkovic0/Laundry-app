import React, { useState } from "react";

import Hamburger from "../components/features/home/Hamburger/Hamburger";
import SideDrawer from "../components/features/home/SideDrawer/SideDrawer";
import BackDrop from "../components/features/home/BackDrop/BackDrop";
import GetStartedSection from "../components/features/home/GetStartedSection/GetStartedSection";
import HowItWorksSection from "../components/features/home/HowItWorksSection/HowItWorksSection";
import FeaturesSection from "../components/features/home/FeaturesSection/FeaturesSection";
import LogoIcon from "../components/shared/icons/LogoIcon/LogoIcon";

const Home = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpened(false);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpened(true);
  };

  return (
    <div className="home">
      <div className="header">
        <LogoIcon hideLogoText />
        <Hamburger
          onHamburgerClick={handleOpenDrawer}
          isDrawerOpened={isDrawerOpened}
        />
      </div>
      <SideDrawer
        onLinkClick={handleCloseDrawer}
        isDrawerOpened={isDrawerOpened}
      />
      {isDrawerOpened && <BackDrop onBackDropClick={handleCloseDrawer} />}
      <GetStartedSection />
      <HowItWorksSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
