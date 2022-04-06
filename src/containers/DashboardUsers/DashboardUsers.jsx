import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../api/dashboard";
import DashboardUsersCard from "../../components/DashboardCards/DashboardUsersCard";
import { FETCH_DASHBOARD_USERS } from "../../store/actions/dashboard";

const DashboardUsers = () => {
  const { count, user } = useSelector((state) => state.dashboard.users);

  const dispatch = useDispatch();

  useEffect(() => {
    if (count === null) {
      dispatch(fetchDashboardData(FETCH_DASHBOARD_USERS, "users"));
    }
  }, []);

  if (count === null) return null;

  return <DashboardUsersCard count={count} user={user} />;
};

export default DashboardUsers;
