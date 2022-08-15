import React from "react";
import { useSelector } from "react-redux";

import Icon from "../../../core/Icon/Icon";
import Avatar from "../../../shared/icons/Avatar/Avatar";

const DashboardHeader = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="dashboard-header">
      <div className="welcome">
        <Avatar user={profile} size="small" />
        <div className="welcome__text">
          <h4>
            {profile.displayName || `${profile.firstName} ${profile.lastName}`}
          </h4>
          <p>Welcome back</p>
        </div>
      </div>
      <div className="notifications">
        <Icon name="notifications" />
      </div>
    </div>
  );
};

export default DashboardHeader;
