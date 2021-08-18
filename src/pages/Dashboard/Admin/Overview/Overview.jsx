import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../../../styled/breakpoint";

import { Users, Services, Pending, Stats, Orders } from "./OverviewBlocks";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-areas:
    "user"
    "service"
    "pending"
    "orders"
    "stats";

  @media ${breakpoint.tablet} {
    grid-template-columns: auto;
    grid-template-areas:
      "user service pending"
      "orders orders orders"
      "stats stats stats";
  }

  @media ${breakpoint.laptopL} {
    grid-template-columns: 22.5rem 22.5rem 22.5rem 1fr;
    grid-template-areas:
      "user service pending orders"
      "stats stats stats orders";
  }
`;

const Overview = () => (
  <Wrapper>
    <Users />
    <Services />
    <Pending />
    <Stats />
    <Orders />
  </Wrapper>
);

export default Overview;
