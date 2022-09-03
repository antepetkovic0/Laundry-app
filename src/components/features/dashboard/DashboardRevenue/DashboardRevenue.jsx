import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../../../../api/orders";
import { FETCH_ORDERS } from "../../../../store/actions/orders";
import { isRequestOutdated } from "../../../../utils/date";

const DashboardRevenue = () => {
  const { lastFetched, list } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const revenue = useMemo(() => {
    if (!list.length) return 0;

    return list.reduce((sum, order) => sum + order.grandTotal, 0);
  }, [list]);

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchOrders(FETCH_ORDERS));
    }
  }, []);

  return (
    <div className="dashboard-card dashboard-card--revenue">
      <div className="revenue-title">
        <h4>Revenue</h4>
        <span className="revenue-title__period">last month</span>
      </div>
      <div className="revenue-total">
        <span className="revenue-total__dollar">$</span>
        {revenue}
      </div>
    </div>
  );
};

export default DashboardRevenue;
