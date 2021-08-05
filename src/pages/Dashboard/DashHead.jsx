import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/theme";

import Icon from "../../components/Icon/Icon";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Welcome = styled.div`
  display: flex;
  align-items: center;

  div:last-child {
    margin-left: 0.5rem;
  }

  p {
    color: ${theme.text.alt};
    font-size: 1.2rem;
  }
`;

const Notification = styled.div`
  display: flex;
  background-color: ${theme.white};
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid ${theme.neutral.three};
  fill: ${theme.text.alt};

  &:hover {
    background-color: ${theme.neutral.one};
  }
`;

const DashHead = () => (
  <Wrapper>
    <Welcome>
      <Avatar />
      <div>
        <h4>Hi, Ante Petkovic</h4>
        <p>Welcome back</p>
      </div>
    </Welcome>
    <Notification>
      <Icon name="notifications" />
    </Notification>
  </Wrapper>
);

export default DashHead;
