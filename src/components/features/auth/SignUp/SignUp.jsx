import React from "react";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../../../api/auth";
import { TOAST_TYPE } from "../../../../constants/toastType";
import { toastMessage } from "../../../../utils/toast";
import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  const history = useHistory();

  const handleSubmit = async (formData) => {
    console.log("we here", formData);
    try {
      const { data } = await registerUser(formData);
      console.log(data);
      // if (data.message) {
      //   toastMessage(data.message, TOAST_TYPE.SUCCESS);
      // } else {
      //   history.push(`/dashboard`);
      // }
    } catch (err) {
      console.log(err);
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
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
