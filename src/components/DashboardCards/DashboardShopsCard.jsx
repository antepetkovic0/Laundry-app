import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { isoToLocaleDate } from "../../utils/date";
import CaretLink from "../../pages/Dashboard/components/CaretLink";
import { Card, Content, Header, SubTitle } from "./styled";
import EmptyState from "../EmptyState/EmptyState";

const ShopAvatar = styled.div`
  position: absolute;
  right: 1rem;
  top: 3rem;
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
  }
`;

const DashboardShopsCard = ({ count, shop }) => {
  const { name, image, createdAt, user } = shop ?? {};

  return (
    <Card gridArea="service">
      <Header>Shops</Header>
      <Content>
        <div>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count ? (
          <>
            <div>
              <SubTitle>Last created</SubTitle>
              {`${name}`}, {isoToLocaleDate(createdAt)}
            </div>
            <div>
              <SubTitle>Owner</SubTitle>
              {`${user.firstName} ${user.lastName}`}
            </div>
            <ShopAvatar>
              <img src={image} alt="Shop" />
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
    </Card>
  );
};

DashboardShopsCard.propTypes = {
  count: PropTypes.number.isRequired,
  shop: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }).isRequired,
};

// DashboardShopsCard.defaultProps = {
//   count: 0,
// }

export default DashboardShopsCard;
