/* eslint-disable react/prop-types */
import React from "react";

import UserCard from "../UserCard/UserCard";
import UserApproveDialog from "../UserApproveDialog/UserApproveDialog";
import UserDeclineDialog from "../UserDeclineDialog/UserDeclineDialog";
import UserDeleteDialog from "../UserDeleteDialog/UserDeleteDialog";
import EmptyMessage from "../../../shared/messages/EmptyMessage/EmptyMessage";

const UserList = ({ users }) => {
  if (!users.length) {
    return <EmptyMessage />;
  }

  return (
    <div className="users__list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <UserDeleteDialog />
      <UserApproveDialog />
      <UserDeclineDialog />
    </div>
  );
};

export default React.memo(UserList);
