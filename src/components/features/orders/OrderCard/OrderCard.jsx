/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { isoToLocaleDate } from "../../../../utils/date";
import Tag from "../../../core/Tag/Tag";

const OrderCard = ({ order }) => (
  <div className="order-card">
    <div className="order-card__shop">
      <img
        className="order-card__shop-image"
        src={order.Shop.image}
        alt="Shop"
      />

      <div className="order-card__shop-name">{order.Shop.name}</div>
    </div>
    <div className="order-card__description">
      <div className="order-card__quantity-price">
        <div className="order-card__quantity">
          Total items: {order.products.length}
        </div>
        <div className="order-card__price">
          <span className="order-card__dollar">$</span>
          {order.grandTotal}
        </div>
      </div>
      <div className="order-card__status-date">
        <div className="order-card__status">
          <Tag text={order.status} />
        </div>
        <div className="order-card__date">
          {isoToLocaleDate(order.createdAt)}
        </div>
      </div>
    </div>
  </div>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
