import React from "react";
import Button from "../../../Button/Button";
import CaretBackLink from "../../../shared/navigations/CaretBackLink/CaretBackLink";

const SettingsLogout = () => {
  const handleLogout = () => {};

  return (
    <>
      <CaretBackLink href="/app/settings" title="Logout" />
      <div className="logout">
        <h3>You will be missed</h3>
        <p>Are you sure you want to logout?</p>
        <img src="/img/empty_small.jpg" alt="Logout" />
        <Button onClick={handleLogout} text="Logout" fullWidth />
      </div>
    </>
  );
};

export default SettingsLogout;
