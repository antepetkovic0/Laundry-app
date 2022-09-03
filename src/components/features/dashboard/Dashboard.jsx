import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ROLES } from "../../../constants/roles";
import DashboardUsers from "./DashboardUsers/DashboardUsers";
import DashboardShops from "./DashboardShops/DashboardShops";
import WithLoading from "../../../hocs/WithLoading";
import {
  FETCH_DASHBOARD_SHOPS,
  FETCH_DASHBOARD_USERS,
} from "../../../store/actions/dashboard";
import { FETCH_ORDERS } from "../../../store/actions/orders";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardRevenue from "./DashboardRevenue/DashboardRevenue";
import DashboardOrders from "./DashboardOrders/DashboardOrders";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  grid-template-areas: ${(props) => {
    if (props.role === ROLES.ADMIN) {
      return `
      "users"
      "shops"
      "orders"
      `;
    }

    if (props.role === ROLES.SERVICE) {
      return `
        "revenue",
        "shops",
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
  <>
    <DashboardHeader />
    <Wrapper role={roleTitle}>
      {roleTitle === ROLES.ADMIN && <DashboardUsers />}
      {roleTitle === ROLES.SERVICE && <DashboardRevenue />}
      <DashboardShops />
      <DashboardOrders />
    </Wrapper>
  </>
);

Dashboard.propTypes = {
  roleTitle: PropTypes.string.isRequired,
};

// export default Dashboard;

export default WithLoading(
  Dashboard,
  FETCH_DASHBOARD_USERS,
  FETCH_DASHBOARD_SHOPS,
  FETCH_ORDERS
);
