import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Submit } from "./styled";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendResetLink = async () => {
    console.log("sending email");
  };

  return (
    <>
      <Input
        type="email"
        label="Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <p>Enter the email address associated with your account.</p>
      <Submit onClick={handleSendResetLink}>Send reset link</Submit>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Didn&apos;t receive link?{" "}
        <Button text="Resend" type="link" onClick={handleSendResetLink} />
      </p>
    </>
  );
};

export default ForgotPassword;
