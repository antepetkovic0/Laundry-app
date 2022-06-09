/* eslint-disable react/prop-types */
import React from "react";
import UserApproveDialog from "./UserApproveDialog";
import UserCard from "./UserCard";
import UserDeclineDialog from "./UserDeclineDialog";
import UserDeleteDialog from "./UserDeleteDialog";

const UserList = ({ users }) => {
  if (!users.length) {
    return <div>No users yet!</div>;
  }

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <UserDeleteDialog />
      <UserApproveDialog />
      <UserDeclineDialog />
    </>
  );
};

export default React.memo(UserList);
