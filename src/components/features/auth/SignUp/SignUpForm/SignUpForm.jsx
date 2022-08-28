import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { TOAST_TYPE } from "../../../../../constants/toastType";
import { toastMessage } from "../../../../../utils/toast";
import { useInput } from "../../../../../hooks/useInput";
import InputField from "../../../../shared/fields/InputField/InputField";
import RoleSelect from "../RoleSelect/RoleSelect";

const SignUpForm = ({ onSubmit }) => {
  const [roleId, setRoleId] = useState();
  const [firstName, { handleInputChange: handleFirstNameChange }] = useInput();
  const [lastName, { handleInputChange: handleLastNameChange }] = useInput();
  const [phone, { handleInputChange: handlePhoneChange }] = useInput();
  const [email, { handleInputChange: handleEmailChange }] = useInput();
  const [password, { handleInputChange: handlePasswordChange }] = useInput();
  const [
    confirmedPassword,
    { handleInputChange: handleConfirmedPasswordChange },
  ] = useInput();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      toastMessage("Passwords don't match!", TOAST_TYPE.ERROR);
      return;
    }

    onSubmit({
      roleId: roleId.roleId,
      firstName,
      lastName,
      phone,
      email,
      password,
    });
  };

  const handleSelectChange = useCallback((e) => {
    setRoleId(e);
  }, []);

  const handleShowPasswordToggle = useCallback((isConfirmedPassword) => {
    if (!isConfirmedPassword) {
      setShowPassword(!showPassword);
      return;
    }

    setShowConfirmedPassword(!showConfirmedPassword);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <RoleSelect value={roleId} onChange={handleSelectChange} />
      </div>
      <InputField
        type="text"
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <InputField
        type="text"
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <InputField
        type="text"
        name="phone"
        label="Phone"
        value={phone}
        onChange={handlePhoneChange}
      />
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
        iconName={showPassword ? "visibility_off" : "visibility"}
        onIconClick={() => handleShowPasswordToggle(false)}
      />
      <InputField
        type={showConfirmedPassword ? "text" : "password"}
        name="confirmPassword"
        label="Confirm Password"
        value={confirmedPassword}
        onChange={handleConfirmedPasswordChange}
        iconName={showConfirmedPassword ? "visibility_off" : "visibility"}
        onIconClick={() => handleShowPasswordToggle(true)}
      />
      <button type="submit" className="auth__submit">
        Sign up
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
