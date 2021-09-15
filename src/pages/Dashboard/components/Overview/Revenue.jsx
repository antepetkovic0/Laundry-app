import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Revenue = () => (
  <Wrapper gridArea="revenue">
    <OverviewTitle>Revenue</OverviewTitle>
    <Content>income blabla</Content>
  </Wrapper>
);

export default Revenue;
