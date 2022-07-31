import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";
import { loginUser } from "../../../../api/auth";
import SignInForm from "./SignInForm/SignInForm";

const AuthSwap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 1.2rem;

  button {
    color: ${theme.gray.dark};
  }
`;

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    dispatch(loginUser(formData, history));
  };

  return (
    <>
      <SignInForm onSubmit={handleSubmit} />
      <AuthSwap>
        <span style={{ marginRight: "5px" }}>Don&apos;t have account?</span>
        <Link to="/auth/sign-up">Sign Up</Link>
      </AuthSwap>
    </>
  );
};

export default SignIn;
