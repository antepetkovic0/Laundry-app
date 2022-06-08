/* eslint-disable react/prop-types */
import React from "react";
import UserCard from "./UserCard";
import DeleteDialog from "./UserDeleteDialog";

const UserList = ({ users }) => {
  if (!users.length) {
    return <div>No users yet!</div>;
  }

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <DeleteDialog />
    </>
  );
};

export default React.memo(UserList);
