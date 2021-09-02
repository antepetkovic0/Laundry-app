import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import { theme } from "../../../../styled/theme";
import { isoToLocaleDate } from "../../../../utils/date";

import CaretLink from "../../components/CaretLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);
  grid-area: ${(props) => props.gridArea};
  border-radius: 0.8rem;
  padding: 1rem;

  a {
    align-self: flex-end;
  }
`;

const OverviewTitle = styled.div`
  display: flex;
  font-weight: 500;
`;

const Content = styled.div`
  flex: 1;
  margin: 1rem 0;
  /* font-size: 1.2rem; */
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  color: ${theme.text.alt};
  font-size: 1rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;

export const Users = () => {
  const { users } = useSelector((state) => state.dashboard);

  if (!users.length) {
    return <div>ldsla</div>;
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
          {users[0].name}, {isoToLocaleDate(users[0].createdAt)}
        </div>
      </Content>
      <CaretLink linkTo="/dashboard/admin/users" />
    </Wrapper>
  );
};
export const Services = () => (
  <Wrapper gridArea="service">
    <OverviewTitle>Services</OverviewTitle>
    <Content>
      <div>
        <SubTitle>Total</SubTitle>
        12
      </div>
      <div>
        <SubTitle>Last signed</SubTitle>
        Blalai
      </div>
    </Content>
    <CaretLink linkTo="/dashboard/admin/services" />
  </Wrapper>
);

export const Pending = () => {
  const { pending } = useSelector((state) => state.dashboard);

  // if (!pending.length) {
  //   return <div>ldsla</div>;
  // }
  return (
    <Wrapper gridArea="pending">
      <OverviewTitle>Pending Registrations</OverviewTitle>
      <Content>
        {!pending.length ? (
          <EmptyState
            message="Currently there are no open pending requests"
            imgCss={{ maxHeight: "150px" }}
          />
        ) : (
          <>
            <div>
              <SubTitle>Total</SubTitle>
              {pending.length}
            </div>
            <div>
              <SubTitle>Last signed</SubTitle>
              {pending[0].name}, {isoToLocaleDate(pending[0].createdAt)}
            </div>
          </>
        )}
      </Content>
      <CaretLink linkTo="/dashboard/admin/pending" />
    </Wrapper>
  );
};

export const Stats = () => <Wrapper gridArea="stats" />;
export const Orders = () => <Wrapper gridArea="orders" />;
