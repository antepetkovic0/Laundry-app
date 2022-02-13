import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoint } from "../styled/breakpoint";
import DashboardNavigation from "../components/dashboardComponents/DashboardNavigation/DashboardNavigation";

const ContentContainer = styled.div`
  padding: 2rem 2rem 6rem;

  @media ${breakpoint.tablet} {
    padding: 2rem 2rem 2rem 6rem;
  }
`;

const DashboardLayout = ({ children }) => {
  console.log("y");
  return (
    <>
      <DashboardNavigation />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
