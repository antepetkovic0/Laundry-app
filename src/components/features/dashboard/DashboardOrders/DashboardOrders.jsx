import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../../../../api/orders";
import { FETCH_ORDERS } from "../../../../store/actions/orders";
import { isoToLocaleDate, isRequestOutdated } from "../../../../utils/date";
import Tag from "../../../core/Tag/Tag";

const DashboardOrders = () => {
  const { lastFetched, list } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchOrders(FETCH_ORDERS));
    }
  }, []);

  return (
    <div className="dashboard-card dashboard-card--orders">
      <h4>Orders</h4>
      <div className="order-list">
        {list.map((order) => (
          <div className="order">
            <div className="order__price">
              <span className="order__dollar">$</span>
              {order.grandTotal}
            </div>
            <div className="order__status">
              <Tag text={order.status} />
            </div>
            <div className="order__date">
              {isoToLocaleDate(order.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOrders;
