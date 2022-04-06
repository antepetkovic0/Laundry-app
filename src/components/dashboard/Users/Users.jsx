import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table, { TableWrapper } from "../../Table/Table";
import DeleteDialog from "./DeleteDialog";
import Actions from "./Actions";
import { fetchUsers } from "../../../api/user";
import UserCard from "./UserCard";
import WithLoading from "../../../hocs/WithLoading";

const Users = () => {
  const { loading, list, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  console.log("usr list", list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // if (error) return <div>error</div>;

  // if (loading) return <div className="loader" />;

  // if (!list.length) return <div>No users</div>;

  return (
    <>
      <h2>Users</h2>
      <p>List of active users</p>
      {list.map((user) => (
        <UserCard user={user} />
      ))}
      {/* <TableWrapper>
        <Table columns={columns} data={userRows} />
      </TableWrapper> */}
      <DeleteDialog />
    </>
  );
};

export default Users;

// const UsersWithLoading = WithLoading(Users);

// export default UsersWithLoading;
