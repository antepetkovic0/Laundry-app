import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../../../api/auth";
import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import SignInForm from "./SignInForm/SignInForm";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    dispatch(loginUser(formData, history));
  };

  return (
    <>
      <SignInForm onSubmit={handleSubmit} />
      <div className="auth-swap">
        <span className="auth-swap__message">Don&apos;t have account?</span>
        <AnchorLink href="/auth/sign-up">Sign Up</AnchorLink>
      </div>
    </>
  );
};

export default SignIn;
