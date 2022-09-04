import React from "react";

import { useInput } from "../../../../hooks/useInput";
import InputField from "../../../shared/fields/InputField/InputField";
import Button from "../../../core/Button/Button";
import { requestResetPassword } from "../../../../api/auth";

const ForgotPassword = () => {
  const [email, { handleInputChange }] = useInput();

  const handleSendResetLink = () => {
    requestResetPassword(email);
  };

  return (
    <>
      <InputField
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={handleInputChange}
      />
      <p>Enter the email address associated with your account.</p>
      <button
        type="button"
        className="auth__submit"
        onClick={handleSendResetLink}
      >
        Send reset link
      </button>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Didn&apos;t receive link?{" "}
        <Button text="Resend" type="link" onClick={handleSendResetLink} />
      </p>
    </>
  );
};

export default ForgotPassword;
