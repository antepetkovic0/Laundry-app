import React from "react";
import PropTypes from "prop-types";

import { isoToLocaleDate } from "../../../../../utils/date";
import EmptyMessage from "../../../../shared/messages/EmptyMessage/EmptyMessage";

const DashboardUsersCard = ({ count, user }) => {
  const { firstName, lastName, status, createdAt } = user ?? {};

  return (
    <div className="dashboard-card dashboard-card--users">
      <div className="dashboard-card__title">Users</div>
      <div className="dashboard-card__content">
        <div>
          <div className="dashboard-card__subtitle">Total</div>
          {count}
        </div>
        {count ? (
          <>
            <div>
              <div className="dashboard-card__subtitle">Last signed</div>
              {`${firstName} ${lastName}`}, {isoToLocaleDate(createdAt)}
            </div>
            <div>
              <div className="dashboard-card__subtitle">Status</div>
              {`${status.toLowerCase()}`}
            </div>
          </>
        ) : (
          <EmptyMessage />
        )}
      </div>
    </div>
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
