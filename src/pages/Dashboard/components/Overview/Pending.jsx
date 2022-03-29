import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Pending = () => {
  const { count, list } = useSelector((state) => state.dashboard.pending);
  const user = list[0] ?? {};

  return (
    <Wrapper gridArea="pending">
      <OverviewTitle>Pending requests</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count ? (
          <>
            <div>
              <SubTitle>Last signed</SubTitle>
              {`${user.firstName} ${user.lastName}`},{" "}
              {isoToLocaleDate(user.createdAt)}
            </div>
          </>
        ) : (
          <EmptyState
            message="Currently there are no open pending requests"
            imgCss={{ maxHeight: "150px" }}
          />
        )}
      </Content>
      <CaretLink linkTo="/dashboard/pending" />
    </Wrapper>
  );
};

export default Pending;
