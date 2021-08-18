import React, { useState, useEffect, useMemo } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { getUsers } from "../../../../api/user";
import Table, { TableWrapper } from "../../../../components/Table/Table";
import DeleteDialog from "./DeleteDialog";

import UserTableActions from "./UserTableActions";

const Users = (props) => {
  const history = useHistory();
  const [users, setUsers] = useState();

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

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      if (response.data.authenticationErr) {
        history.push("/auth");
      }
      if (response.data.authorizationErr) {
        history.push("/error/401");
      }

      setUsers(
        response.data.map(({ name, phone, email }, i) => ({
          name,
          phone,
          email,
          actions: <UserTableActions rowIdx={i} />,
        }))
      );
    })();
  }, []);

  if (!users) return <div>dsadla</div>;
  return (
    <>
      <TableWrapper>
        <Table columns={columns} data={users} />
      </TableWrapper>
      <DeleteDialog />
    </>
  );
};

export default Users;
