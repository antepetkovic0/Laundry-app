import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { breakpoint } from "../styled/breakpoint";
import DashboardNavigation from "../components/dashboard/Navigation/DashboardNavigation";

const ContentContainer = styled.div`
  padding: 2rem 2rem 6rem;

  @media ${breakpoint.tablet} {
    padding: 2rem 2rem 2rem 6rem;
  }
`;

const DashboardLayout = ({ children }) => {
  const isAuth = useSelector((state) => state.profile.isAuth);

  if (!isAuth) {
    return <div>loading</div>;
  }

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
