import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle, ShopAvatar } from "./style";

const Shops = () => {
  const { shops } = useSelector((state) => state.dashboard);

  return (
    <Wrapper gridArea="service">
      <OverviewTitle>Shops</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {shops.length}
        </div>
        {shops.length > 0 ? (
          <>
            <div style={{ marginBottom: "10px" }}>
              <SubTitle>Last created</SubTitle>
              {`${shops[0].name}`}, {isoToLocaleDate(shops[0].createdAt)}
            </div>
            <div>
              <SubTitle>Owner</SubTitle>
              {`${shops[0].User.firstName} ${shops[0].User.lastName}`}
            </div>
            <ShopAvatar>
              <img src={shops[0].image} alt={shops[0].name} />
            </ShopAvatar>
          </>
        ) : (
          <EmptyState
            message="Currently there are no created shops"
            imgCss={{ maxHeight: "150px" }}
          />
        )}
      </Content>
      <CaretLink linkTo="/dashboard/shops" />
    </Wrapper>
  );
};

export default Shops;
