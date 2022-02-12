import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../styled/theme";

import { auth } from "../api/auth";
import { toastMessage } from "../utils/toast";
import { TOAST_TYPE } from "../utils/constants";
import SignInForm from "../components/authComponents/SignInForm/SignInForm";

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

  const handleSubmit = async (formData) => {
    try {
      const { data } = await auth(formData);
      if (data.message) {
        toastMessage(data.message, TOAST_TYPE.SUCCESS);
      } else {
        history.push(`/dashboard`);
      }
    } catch (err) {
      console.log(err);
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
  };

  return (
    <>
      <SignInForm onSubmit={handleSubmit} />
      <AuthSwap>
        <span style={{ marginRight: "5px" }}>Don&apos;t have account?</span>
        <Link to="/sign-up">Sign Up</Link>
      </AuthSwap>
    </>
  );
};

export default SignIn;
