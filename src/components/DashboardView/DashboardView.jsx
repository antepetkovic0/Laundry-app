import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Roles } from "../../utils/constants";
import { breakpoint } from "../../styled/breakpoint";
import DashboardUsers from "../../containers/DashboardUsers/DashboardUsers";
import DashboardPendingRequests from "../../containers/DashboardPendingRequests/DashboardPendingRequest";
import DashboardShops from "../../containers/DashboardShops/DashboardShops";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-areas: ${(props) => {
    if (props.userRole === Roles.ADMIN) {
      return `
      "user"
      "pending"
      "service"
      "orders"
      `;
    }
    if (props.userRole === Roles.SERVICE) {
      return `
      "revenue"
      "service"
      "calendar"
      "orders"
      `;
    }
    return `
    "service"
    "calendar"
    "orders"
    `;
  }};

  @media ${breakpoint.tablet} {
    grid-template-columns: auto;
    grid-template-areas: ${(props) => {
      if (props.userRole === Roles.ADMIN) {
        return `
        "user pending"
        "service service"
        "orders orders"
      `;
      }
      if (props.userRole === Roles.SERVICE) {
        return `
        "revenue calendar"
        "service calendar"
        "orders orders"
      `;
      }
      return `
      "service calendar"
      "orders calendar"
    `;
    }};
  }

  @media ${breakpoint.laptopL} {
    grid-template-columns: 22.5rem 22.5rem 22.5rem 1fr;
    grid-template-columns: auto;
    grid-template-areas: ${(props) => {
      if (props.userRole === Roles.ADMIN) {
        return `
        "user pending service"
        "orders orders orders"
      `;
      }
      if (props.userRole === Roles.SERVICE) {
        return `
        "revenue calendar"
        "service calendar"
        "orders orders"
      `;
      }
      return `
      "service calendar"
      "orders calendar"
    `;
    }};
  }
`;

const DashboardView = ({ roleTitle }) => (
  <Wrapper userRole={roleTitle}>
    {roleTitle === Roles.ADMIN && (
      <>
        <DashboardUsers />
        <DashboardPendingRequests />
      </>
    )}
    {/* {roleTitle === Roles.SERVICE && <Revenue />}
    {roleTitle !== Roles.ADMIN && <Calendar />} */}
    <DashboardShops />
    {/* <Orders /> */}
  </Wrapper>
);

DashboardView.propTypes = {
  roleTitle: PropTypes.string.isRequired,
};

export default DashboardView;
