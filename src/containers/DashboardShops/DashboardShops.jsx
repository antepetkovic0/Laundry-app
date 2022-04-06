import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../api/dashboard";
import DashboardShopsCard from "../../components/DashboardCards/DashboardShopsCard";
import { FETCH_DASHBOARD_SHOPS } from "../../store/actions/dashboard";

const DashboardShops = () => {
  const { count, shop } = useSelector((state) => state.dashboard.shops);

  const dispatch = useDispatch();

  useEffect(() => {
    if (count === null) {
      dispatch(fetchDashboardData(FETCH_DASHBOARD_SHOPS, "shops"));
    }
  }, []);

  if (count === null) return null;

  return <DashboardShopsCard count={count} shop={shop} />;
};

export default DashboardShops;
