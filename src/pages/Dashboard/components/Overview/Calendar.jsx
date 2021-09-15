import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Calendar = () => (
  <Wrapper gridArea="calendar">
    <OverviewTitle>Calendar</OverviewTitle>
    <Content>yo this is Calendar</Content>
  </Wrapper>
);

export default Calendar;
