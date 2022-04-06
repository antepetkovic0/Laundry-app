import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table, { TableWrapper } from "../../Table/Table";
import EmptyState from "../../EmptyState/EmptyState";
import Dialog from "./Dialog";
import Actions from "./Actions";
import { fetchPendingUsers } from "../../../api/user";

const PendingUsers = () => {
  const { loading, list, error } = useSelector((state) => state.pending);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(fetchPendingUsers());
    }
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

  const pendingRows = useMemo(
    () =>
      list
        ? list.map(({ firstName, lastName, phone, email, id }) => ({
            name: `${firstName} ${lastName}`,
            phone,
            email,
            actions: <Actions userId={id} />,
          }))
        : [],
    [list]
  );

  if (error) return <div>error</div>;

  if (loading) return <div className="loader" />;

  if (!pendingRows.length) {
    return (
      <EmptyState
        message="Currently there are no open pending requests"
        imgCss={{
          maxWidth: "100%",
          borderRadius: "8px",
          marginTop: "1.5rem",
        }}
      />
    );
  }

  return (
    <>
      <TableWrapper>
        <Table columns={columns} data={pendingRows} />
      </TableWrapper>
      <Dialog />
    </>
  );
};

export default PendingUsers;
