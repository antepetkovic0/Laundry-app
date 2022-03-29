import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table, { TableWrapper } from "../../../../components/Table/Table";
import DeleteDialog from "./DeleteDialog";
import Actions from "./Actions";
import { fetchUsers } from "../../../../api/user";

const Users = () => {
  const { loading, list, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  const userRows = useMemo(
    () =>
      list.map(({ firstName, lastName, phone, email, id }) => ({
        name: `${firstName} ${lastName}`,
        phone,
        email,
        actions: <Actions userId={id} />,
      })),
    [list]
  );

  if (error) return <div>error</div>;

  if (loading) return <div className="loader" />;

  if (!list.length) return <div>No users</div>;

  return (
    <>
      <h2>Users</h2>
      <p>List of active users</p>
      <TableWrapper>
        <Table columns={columns} data={userRows} />
      </TableWrapper>
      <DeleteDialog />
    </>
  );
};

export default Users;
