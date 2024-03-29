import React from "react";
import { useDispatch } from "react-redux";

import { clearUserData } from "../../../../store/actions/profile";
import { setCookie } from "../../../../utils/cookie";
import localStorage from "../../../../utils/localStorage";
import Button from "../../../core/Button/Button";
import CaretBackLink from "../../../shared/navigations/CaretBackLink/CaretBackLink";

const SettingsLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("access-token");
    setCookie("refresh-token", "", 0);
    dispatch(clearUserData());
  };

  return (
    <>
      <CaretBackLink href="/app/settings" title="Logout" />
      <div className="logout">
        <img src="/img/empty_small.jpg" alt="Logout" />
        <h3>You will be missed</h3>
        <p>Are you sure you want to logout?</p>
        <Button onClick={handleLogout} text="Logout" />
      </div>
    </>
  );
};

export default SettingsLogout;
