import React from "react";
import PropTypes from "prop-types";
import EmptyMessage from "../../../shared/messages/EmptyMessage/EmptyMessage";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ orders }) => {
  if (!orders.length) return <EmptyMessage />;

  return (
    <div className="orders__list">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
    })
  ).isRequired,
};

export default OrderList;
