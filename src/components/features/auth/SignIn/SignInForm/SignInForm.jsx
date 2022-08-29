import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { useInput } from "../../../../../hooks/useInput";
import AnchorLink from "../../../../core/AnchorLink/AnchorLink";
import InputField from "../../../../shared/fields/InputField/InputField";

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
      <div className="forgot-password">
        <AnchorLink href="/auth/forgot-password">Forgot password?</AnchorLink>
      </div>
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
