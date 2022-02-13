import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { breakpoint } from "../../../styled/breakpoint";
import { theme } from "../../../styled/theme";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { Submit } from "../styled";

const FormContainer = styled.form`
  padding: 3rem 1rem;
  margin: 0 auto;
  width: 25rem;

  @media ${breakpoint.tablet} {
    width: 35rem;
  }
`;

const ForgotPass = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: ${theme.gray.dark};
`;

const SignInForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        label="Email"
        onChange={handleInputChange}
      />
      <Input
        type={!showPassword ? "password" : "text"}
        name="password"
        label="Password"
        onChange={handleInputChange}
        iconName={!showPassword ? "visibility" : "visibility_off"}
        onIconClick={toggleShowPassword}
      />
      <Link to="/password-forgot">
        <ForgotPass>
          <Button text="Forgot password?" type="link" />
        </ForgotPass>
      </Link>
      <Submit type="submit">Login</Submit>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
