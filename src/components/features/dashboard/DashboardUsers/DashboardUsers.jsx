import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDashboardData } from "../../../../api/dashboard";
import { FETCH_DASHBOARD_USERS } from "../../../../store/actions/dashboard";
import { isRequestOutdated } from "../../../../utils/date";

const DashboardUsers = () => {
  const { lastFetched, active, pending, disabled } = useSelector(
    (state) => state.dashboard.users
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchDashboardData(FETCH_DASHBOARD_USERS, "users"));
    }
  }, []);

  return (
    <div className="dashboard-card dashboard-card--users">
      <h4>Users</h4>
      <div className="total-container">
        <div className="total">
          <div className="total__title">Active</div>
          <div className="total__count">{active}</div>
        </div>
        <div className="total">
          <div className="total__title">Pending</div>
          <div className="total__count">{pending}</div>
        </div>
        <div className="total">
          <div className="total__title">Disabled</div>
          <div className="total__count">{disabled}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
