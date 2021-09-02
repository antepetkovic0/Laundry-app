import React, { useEffect } from "react";
import styled from "styled-components";

import { breakpoint } from "../../../../styled/breakpoint";

import Calendar from "./Calendar";
import Orders from "./Orders";
import Revenue from "./Revenue";
import Shops from "./Shops";
import Stats from "./Stats";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-areas:
    "revenue"
    "shops"
    "orders"
    "calendar"
    "stats";

  @media ${breakpoint.tablet} {
    grid-template-columns: auto;
    grid-template-areas:
      "revenue shops orders"
      "calendar calendar calendar"
      "stats stats stats";
  }

  @media ${breakpoint.laptopL} {
    grid-template-columns: 22.5rem 22.5rem 22.5rem 1fr;
    grid-template-areas:
      "revenue shops orders calendar"
      "stats stats stats calendar";
  }
`;

const Overview = () => {
  useEffect(() => {});
  return (
    <Wrapper>
      <Revenue />
      <Shops />
      <Orders />
      <Calendar />
      <Stats />
    </Wrapper>
  );
};

export default Overview;
