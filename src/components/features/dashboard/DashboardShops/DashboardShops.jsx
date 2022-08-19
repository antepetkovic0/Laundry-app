import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchDashboardData } from "../../../../api/dashboard";
import { FETCH_DASHBOARD_SHOPS } from "../../../../store/actions/dashboard";
import { isRequestOutdated } from "../../../../utils/date";

const DashboardShops = () => {
  const { lastFetched, count } = useSelector((state) => state.dashboard.shops);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchDashboardData(FETCH_DASHBOARD_SHOPS, "shops", history));
    }
  }, []);

  if (count === null) return null;

  return (
    <div className="dashboard-card dashboard-card--shops">
      <h4>Shops</h4>
      <div className="total-container">
        <div className="total">
          <div className="total__title">Total</div>
          <div className="total__count">{count}</div>
        </div>
        <div className="total">
          <div className="total__title">Nearby your place</div>
          <div className="total__count">0</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardShops;
