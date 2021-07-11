import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Form from "./components/Form";
import ForgetPass from "./components/ForgetPass";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = () => (
  <Wrapper>
    <Header />
    <Switch>
      <Route path="/auth" exact component={Form} />
      <Route path="/auth/forget" component={ForgetPass} />
    </Switch>
  </Wrapper>
);

export default Auth;
