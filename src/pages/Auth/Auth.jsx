import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import styled from "styled-components";

import NotFound from "../Error/NotFound";

import Header from "./components/Header";
import Form from "./components/Form";
import ForgetPass from "./components/ForgetPass";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = () => {
  const history = useHistory();
  const { profile } = useSelector((state) => state);

  useEffect(() => {
    if (profile.isAuth) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <Wrapper>
      <Header title="Auth" />
      <Switch>
        <Route path="/auth" component={Form} exact />
        <Route path="/auth/forget" component={ForgetPass} exact />
        <Route>
          <NotFound isAuthRelated />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Auth;
