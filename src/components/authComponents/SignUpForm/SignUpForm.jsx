import React, { useState } from "react";
import PropTypes from "prop-types";

import SelectRolePicker from "../SelectRolePicker/SelectRolePicker.";
import Input from "../../Input/Input";
import { Submit } from "../styled";

const SignUpForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    roleId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    onSubmit(form);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (roleId) => {
    setForm({ ...form, roleId });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordToggle = (isConfirmedPassword) => {
    if (!isConfirmedPassword) {
      setShowPassword(!showPassword);
      return;
    }

    setShowConfirmedPassword(!showConfirmedPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <SelectRolePicker onSelectChange={handleSelectChange} />
      </div>
      <div>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          onChange={handleInputChange}
        />
      </div>
      <Input
        type="text"
        name="phone"
        label="Phone"
        onChange={handleInputChange}
      />
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
        onIconClick={() => handleShowPasswordToggle(false)}
      />
      <Input
        type={!showConfirmedPassword ? "password" : "text"}
        name="confirmPassword"
        label="Confirm Password"
        onChange={handleConfirmPasswordChange}
        iconName={!showConfirmedPassword ? "visibility" : "visibility_off"}
        onIconClick={() => handleShowPasswordToggle(true)}
      />
      <Submit type="submit">Sign up</Submit>
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
