import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Table, { TableWrapper } from "../../../../components/Table/Table";
import DeleteDialog from "./DeleteDialog";
import Actions from "./Actions";

const Users = () => {
  const users = useSelector((state) => state.dashboard.users);

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
      users.map(({ name, phone, email, id }) => ({
        name,
        phone,
        email,
        actions: <Actions userId={id} />,
      })),
    [users]
  );

  if (!users.length) return <div>No users</div>;

  return (
    <>
      <TableWrapper>
        <Table columns={columns} data={userRows} />
      </TableWrapper>
      <DeleteDialog />
    </>
  );
};

export default Users;
