import React from "react";
import PropTypes from "prop-types";

import { isoToLocaleDate } from "../../utils/date";
import CaretLink from "../../pages/Dashboard/components/CaretLink";
import { Card, Content, Header, SubTitle } from "./styled";
import EmptyState from "../EmptyState/EmptyState";

const DashboardPendingRequestCard = ({ count, user }) => {
  const { firstName, lastName, createdAt } = user ?? {};

  return (
    <Card gridArea="pending">
      <Header>Pending requests</Header>
      <Content>
        <div>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count ? (
          <div>
            <SubTitle>Last signed</SubTitle>
            {`${firstName} ${lastName}`}, {isoToLocaleDate(createdAt)}
          </div>
        ) : (
          <EmptyState
            message="Currently there are no open pending requests"
            imgCss={{ maxHeight: "150px" }}
          />
        )}
      </Content>
      <CaretLink linkTo="/dashboard/pending" />
    </Card>
  );
};

DashboardPendingRequestCard.propTypes = {
  count: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

// DashboardPendingRequestCard.defaultProps = {
//   count: 0,
// }

export default DashboardPendingRequestCard;
