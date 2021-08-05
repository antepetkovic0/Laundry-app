import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";

import CaretLink from "../../CaretLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.05);
  grid-area: ${(props) => props.gridArea};
  border-radius: 0.8rem;
  padding: 1rem;
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

const SubTitle = styled.span`
  text-transform: uppercase;
  color: ${theme.text.alt};
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;

export const Users = () => (
  <Wrapper gridArea="user">
    <OverviewTitle>Users</OverviewTitle>
    <Content>
      <div>
        <SubTitle>Total</SubTitle>
        12
      </div>
      <div>
        <SubTitle>Last signed</SubTitle>
        Sime Simecki
      </div>
    </Content>
    <CaretLink linkTo="dasda" />
  </Wrapper>
);
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
    <CaretLink linkTo="dasda" />
  </Wrapper>
);

export const Pending = () => (
  <Wrapper gridArea="pending">
    <OverviewTitle>Pending Registrations</OverviewTitle>
    <Content>
      <div>
        <SubTitle>Total</SubTitle>
        12
      </div>
      <div>
        <SubTitle>Last signed</SubTitle>
        Sime Simecki
      </div>
    </Content>
    <CaretLink linkTo="dasda" />
  </Wrapper>
);
export const Stats = () => <Wrapper gridArea="stats" />;
export const Orders = () => <Wrapper gridArea="orders" />;
