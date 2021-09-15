import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Table, { TableWrapper } from "../../../../components/Table/Table";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import Dialog from "./Dialog";
import Actions from "./Actions";

const Pending = () => {
  const { pending } = useSelector((state) => state.dashboard);

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
      pending.map(({ firstName, lastName, phone, email, id }) => ({
        name: `${firstName} ${lastName}`,
        phone,
        email,
        actions: <Actions userId={id} />,
      })),
    [pending]
  );

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

export default Pending;
