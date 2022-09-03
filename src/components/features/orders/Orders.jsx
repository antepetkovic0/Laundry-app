import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WithLoading from "../../../hocs/WithLoading";
import { fetchOrders } from "../../../api/orders";
import { FETCH_ORDERS } from "../../../store/actions/orders";
import { isRequestOutdated } from "../../../utils/date";
import OrderList from "./OrderList/OrderList";

const Orders = () => {
  const dispatch = useDispatch();

  const { list, lastFetched } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchOrders(FETCH_ORDERS));
    }
  }, []);

  return (
    <div className="orders">
      <h2 className="orders__title">Orders</h2>
      <p className="orders__description">
        Intro message to orders page. Feel free to search all available orders.
      </p>
      <OrderList orders={list} />
    </div>
  );
};

export default WithLoading(Orders, FETCH_ORDERS);
