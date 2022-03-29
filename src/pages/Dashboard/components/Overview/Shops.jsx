import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle, ShopAvatar } from "./style";

const Shops = () => {
  const { count, list } = useSelector((state) => state.dashboard.shops);
  const shop = list[0] ?? {};

  return (
    <Wrapper gridArea="service">
      <OverviewTitle>Shops</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count > 0 ? (
          <>
            <div style={{ marginBottom: "10px" }}>
              <SubTitle>Last created</SubTitle>
              {`${shop.name}`}, {isoToLocaleDate(shop.createdAt)}
            </div>
            <div>
              <SubTitle>Owner</SubTitle>
              {`${shop.User.firstName} ${shop.User.lastName}`}
            </div>
            <ShopAvatar>
              <img src={shop.image} alt={shop.name} />
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
