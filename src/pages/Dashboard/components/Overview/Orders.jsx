import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Orders = () => (
  <Wrapper gridArea="orders">
    <OverviewTitle>Orders</OverviewTitle>
    <Content>yo this is orders</Content>
  </Wrapper>
);

export default Orders;
