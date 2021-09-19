import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Pending = () => {
  const { pending } = useSelector((state) => state.dashboard);

  return (
    <Wrapper gridArea="pending">
      <OverviewTitle>Pending requests</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {pending.length}
        </div>
        {pending.length > 0 ? (
          <>
            <div>
              <SubTitle>Last signed</SubTitle>
              {`${pending[0].firstName} ${pending[0].lastName}`},{" "}
              {isoToLocaleDate(pending[0].createdAt)}
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
