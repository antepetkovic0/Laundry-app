import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../api/auth";
import SignUpForm from "../components/authComponents/SignUpForm/SignUpForm";
import { theme } from "../styled/theme";
import { TOAST_TYPE } from "../utils/constants";
import { toastMessage } from "../utils/toast";

const AuthSwap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 1.2rem;

  button {
    color: ${theme.gray.dark};
  }
`;

const SignUp = () => {
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
      <SignUpForm onSubmit={handleSubmit} />
      <AuthSwap>
        <span style={{ marginRight: "5px" }}>Joined us before?</span>
        <Link to="sign-in">Sign in</Link>
      </AuthSwap>
    </>
  );
};

export default SignUp;
