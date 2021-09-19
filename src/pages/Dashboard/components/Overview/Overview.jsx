import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Roles } from "../../../../utils/constants";
import { breakpoint } from "../../../../styled/breakpoint";

import Users from "./Users";
import Pending from "./Pending";
import Shops from "./Shops";
import Calendar from "./Calendar";
import Orders from "./Orders";
import Revenue from "./Revenue";

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

const Overview = () => {
  const { Role } = useSelector((state) => state.profile);
  useEffect(() => {
    console.log("running overview");
  }, []);
  return (
    <Wrapper userRole={Role.title}>
      {Role.title === Roles.ADMIN && (
        <>
          <Users />
          <Pending />
        </>
      )}
      {Role.title === Roles.SERVICE && <Revenue />}
      {Role.title !== Roles.ADMIN && <Calendar />}
      <Shops />
      <Orders />
    </Wrapper>
  );
};

export default Overview;
