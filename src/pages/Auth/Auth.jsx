import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Form from "./components/Form";
import ForgetPass from "./components/ForgetPass";
import NotFound from "../NotFound/NotFound";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = () => (
  <Wrapper>
    <Header />
    <Switch>
      <Route path="/auth" component={Form} exact />
      <Route path="/auth/forget" component={ForgetPass} exact />
      <Route>
        <NotFound isAuthRelated />
      </Route>
    </Switch>
  </Wrapper>
);

export default Auth;
