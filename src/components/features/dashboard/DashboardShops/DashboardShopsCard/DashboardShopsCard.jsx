import React from "react";
import PropTypes from "prop-types";

import { isoToLocaleDate } from "../../../../../utils/date";
import EmptyMessage from "../../../../shared/messages/EmptyMessage/EmptyMessage";

const DashboardShopsCard = ({ count, shop }) => {
  const { name, image, createdAt, user } = shop ?? {};

  return (
    <div className="dashboard-card dashboard-card--shops">
      <div className="dashboard-card__title">Shops</div>
      <div className="dashboard-card__content">
        <div>
          <div className="dashboard-card__subtitle">Total</div>
          {count}
        </div>
        {count ? (
          <>
            <div>
              <div className="dashboard-card__subtitle">Last created</div>
              {`${name}`}, {isoToLocaleDate(createdAt)}
            </div>
            <div>
              <div className="dashboard-card__subtitle">Owner</div>
              {`${user.firstName} ${user.lastName}`}
            </div>
            <div className="shop-avatar">
              <img src={image} alt="Shop" />
            </div>
          </>
        ) : (
          <EmptyMessage />
        )}
      </div>
    </div>
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
