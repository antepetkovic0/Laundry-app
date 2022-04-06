import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../api/dashboard";
import { FETCH_DASHBOARD_PENDING } from "../../store/actions/dashboard";
import DashboardPendingRequestCard from "../../components/DashboardCards/DashboardPendingRequestCard";

const DashboardPendingRequests = () => {
  const { count, user } = useSelector((state) => state.dashboard.pending);

  const dispatch = useDispatch();

  useEffect(() => {
    if (count === null) {
      dispatch(fetchDashboardData(FETCH_DASHBOARD_PENDING, "pending"));
    }
  }, []);

  if (count === null) return null;

  return <DashboardPendingRequestCard count={count} user={user} />;
};

export default DashboardPendingRequests;
