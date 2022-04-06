import React from "react";
import PropTypes from "prop-types";

import { isoToLocaleDate } from "../../utils/date";
import CaretLink from "../../pages/Dashboard/components/CaretLink";
import { Card, Content, Header, SubTitle } from "./styled";
import EmptyState from "../EmptyState/EmptyState";

const DashboardUsersCard = ({ count, user }) => {
  const { firstName, lastName, status, createdAt } = user ?? {};

  return (
    <Card gridArea="user">
      <Header>Users</Header>
      <Content>
        <div>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count ? (
          <>
            <div>
              <SubTitle>Last signed</SubTitle>
              {`${firstName} ${lastName}`}, {isoToLocaleDate(createdAt)}
            </div>
            <div>
              <SubTitle>Status</SubTitle>
              {`${status.toLowerCase()}`}
            </div>
          </>
        ) : (
          <EmptyState
            message="Currently there are no active users"
            imgCss={{ maxHeight: "150px" }}
          />
        )}
      </Content>
      <CaretLink linkTo="/dashboard/users" />
    </Card>
  );
};

DashboardUsersCard.displayName = "DashboardUsersCard";

DashboardUsersCard.propTypes = {
  count: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

// DashboardUsersCard.defaultProps = {
//   count: 0,
// }

export default DashboardUsersCard;
