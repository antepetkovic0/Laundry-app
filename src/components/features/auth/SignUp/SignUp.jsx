import React from "react";

import { registerUser } from "../../../../api/auth";
import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  const handleSubmit = (formData) => {
    registerUser(formData);
  };

  return (
    <>
      <SignUpForm onSubmit={handleSubmit} />
      <div className="auth-swap">
        <span className="auth-swap__message">Joined us before?</span>
        <AnchorLink href="/auth/sign-in">Sign in</AnchorLink>
      </div>
    </>
  );
};

export default SignUp;
