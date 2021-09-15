import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Shops = () => {
  const { shops } = useSelector((state) => state.dashboard);

  return (
    <Wrapper gridArea="service">
      <OverviewTitle>Shops</OverviewTitle>
      <Content>
        {!shops.length ? (
          <EmptyState
            message="Currently there are no created shops"
            imgCss={{ maxHeight: "150px" }}
          />
        ) : (
          <>
            <div>
              <SubTitle>Total</SubTitle>
              {shops.length}
            </div>
            <div>
              <SubTitle>Last signed</SubTitle>
              {shops[0].name}, {isoToLocaleDate(shops[0].createdAt)}
            </div>
          </>
        )}
      </Content>
      <CaretLink linkTo="/dashboard/shops" />
    </Wrapper>
  );
};

export default Shops;
