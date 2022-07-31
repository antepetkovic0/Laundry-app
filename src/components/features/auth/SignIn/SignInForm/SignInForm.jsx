import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../../styled/theme";
import { useInput } from "../../../../../hooks/useInput";
import InputField from "../../../../shared/fields/InputField/InputField";

const ForgotPass = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: ${theme.gray.dark};
`;

const SignInForm = ({ onSubmit }) => {
  const [email, { handleInputChange: handleEmailChange }] = useInput();
  const [password, { handleInputChange: handlePasswordChange }] = useInput();

  // SECURITY HIDE PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const handleTogglePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [password]);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <InputField
        type={showPassword ? "text" : "password"}
        name="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        iconName={!showPassword ? "visibility" : "visibility_off"}
        onIconClick={handleTogglePasswordVisibility}
      />
      <Link to="/auth/password-reset">
        <ForgotPass>
          Forgot password?
          {/* <Button text="Forgot password?" type="link" /> */}
        </ForgotPass>
      </Link>
      <button type="submit" className="auth__submit">
        Login
      </button>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
