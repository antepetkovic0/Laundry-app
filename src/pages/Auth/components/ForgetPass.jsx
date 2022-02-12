import React, { useState } from "react";
import styled from "styled-components";

import Input from "../../../components/Input/Input";

import { ContentWrapper, Banner, Submit } from "../style";

const Hint = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const ForgetPass = () => {
  const [email, setEmail] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <ContentWrapper>
      <Banner />
      <div style={{ padding: "1rem", width: "25rem" }}>
        <Input
          type="email"
          name="email"
          label="Email"
          onChange={handleEmailChange}
        />
        <Hint>Enter the email address associated with your account.</Hint>
        <Submit>Send reset link</Submit>
      </div>
    </ContentWrapper>
  );
};

export default ForgetPass;
