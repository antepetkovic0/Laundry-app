import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ROLES } from "../../constants/roles";
import DashboardUsers from "../../components/features/dashboard/DashboardUsers/DashboardUsers";
import DashboardShops from "../../components/features/dashboard/DashboardShops/DashboardShops";
import WithLoading from "../../hocs/WithLoading";
import {
  FETCH_DASHBOARD_SHOPS,
  FETCH_DASHBOARD_USERS,
} from "../../store/actions/dashboard";
import DashboardHeader from "../../components/features/dashboard/DashboardHeader/DashboardHeader";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-areas: ${(props) => {
    if (props.role === ROLES.ADMIN) {
      return `
      "users"
      "shops"
      "orders"
      `;
    }

    return `
    "shops"
    "orders"
    `;
  }};
`;

const Dashboard = ({ roleTitle }) => (
  <div>
    <DashboardHeader />
    <Wrapper role={roleTitle}>
      {roleTitle === ROLES.ADMIN && <DashboardUsers />}
      <DashboardShops />
      {/* <Orders /> */}
    </Wrapper>
  </div>
);

Dashboard.propTypes = {
  roleTitle: PropTypes.string.isRequired,
};

export default WithLoading(
  Dashboard,
  FETCH_DASHBOARD_USERS,
  FETCH_DASHBOARD_SHOPS
);
