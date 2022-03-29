import React from "react";
import { useSelector } from "react-redux";

import { isoToLocaleDate } from "../../../../utils/date";
import CaretLink from "../CaretLink";
import { Wrapper, OverviewTitle, Content, SubTitle } from "./style";

const Users = () => {
  const { count, list } = useSelector((state) => state.dashboard.users);
  const user = list[0] ?? {};

  return (
    <Wrapper gridArea="user">
      <OverviewTitle>Users</OverviewTitle>
      <Content>
        <div style={{ marginBottom: "10px" }}>
          <SubTitle>Total</SubTitle>
          {count}
        </div>
        {count > 0 && (
          <>
            <div style={{ marginBottom: "10px" }}>
              <SubTitle>Last signed</SubTitle>
              {`${user.firstName} ${user.lastName}`},{" "}
              {isoToLocaleDate(user.createdAt)}
            </div>
            <div>
              <SubTitle>Status</SubTitle>
              {`${user.status.toLowerCase()}`}
            </div>
          </>
        )}
      </Content>
      <CaretLink linkTo="/dashboard/users" />
    </Wrapper>
  );
};

export default Users;
