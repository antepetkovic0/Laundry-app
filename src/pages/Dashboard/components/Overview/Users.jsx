import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Users = () => {
  const { users } = useSelector((state) => state.dashboard);

  if (!users.length) {
    return <div>No users</div>;
  }
  return (
    <Wrapper gridArea="user">
      <OverviewTitle>Users</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {users.length}
        </div>
        <div>
          <SubTitle>Last signed</SubTitle>
          {`${users[0].firstName} ${users[0].lastName}`},{" "}
          {isoToLocaleDate(users[0].createdAt)}
        </div>
      </Content>
      <CaretLink linkTo="/dashboard/users" />
    </Wrapper>
  );
};

export default Users;
