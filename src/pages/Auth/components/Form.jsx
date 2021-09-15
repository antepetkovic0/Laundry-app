import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import Select from "react-select";
import Banner from "./Banner";
import Input from "./Input";
import Divider from "../../../components/Divider/Divider";
import Button from "../../../components/Button/Button";

import { ContentWrapper, Submit } from "../style";
import { theme } from "../../../styled/theme";
import { authLabel } from "../../../utils/selectLabel";

import { auth } from "../../../api/auth";
import { toastMessage } from "../../../utils/toast";
import { TOAST_TYPE, ROLE_ID } from "../../../utils/constants";
import { setUserProfile } from "../../../store/actions/profile";

const ForgotPass = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: ${theme.gray.dark};
`;

const AuthBtn = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${theme.gray.dark};
  padding: 0.5rem;
  display: flex;

  &:hover {
    opacity: 0.75;
  }
`;

const AuthImg = styled.img`
  max-width: 2.5rem;
  width: 2.5rem;
`;

const ServiceAuth = styled.div`
  display: flex;

  ${AuthBtn}:not(:last-child) {
    margin-right: 10px;
  }
`;

const AuthSwap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 1.2rem;

  button {
    color: ${theme.gray.dark};
  }
`;

const options = [
  { value: 2, label: authLabel("bussines service") },
  { value: 3, label: authLabel("user") },
];

const dividerProps = {
  color: "hsl(0, 0%, 80%)",
  text: "or continue using",
  fontSize: "small",
  textAlignment: "center",
  width: "70",
  weight: "1",
};

const initialState = (isSignup) => {
  if (!isSignup) {
    return { email: "", password: "" };
  }

  return {
    roleId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  };
};

const Form = () => {
  const { state } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState(state?.isSignup || false));
  const [isSignup, setIsSignup] = useState(state?.isSignup || false);

  const [selectedOption, setSelectedOption] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const toggleShowPassword = (isRepeatedPass) => {
    if (!isRepeatedPass) {
      setShowPassword(!showPassword);
      return;
    }
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  const toggleFormAuth = (e) => {
    e.preventDefault();
    setForm(initialState(!isSignup));
    setIsSignup(!isSignup);
  };

  const isValidForm = () => {
    if (isSignup) {
      if (form.password !== confirmPassword) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = isValidForm();
    if (!isValid) {
      alert("passwords dont match");
      return;
    }

    try {
      const { data } = await auth(form);
      if (data.message) {
        toastMessage(data.message, TOAST_TYPE.SUCCESS);
      } else {
        // localStorage.setItem("isAuth", true);
        // dispatch(setUserProfile(data));
        history.push(`/dashboard`);
      }
    } catch (err) {
      console.log(err);
      toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e);
    setForm({ ...form, roleId: e.value });
  };

  return (
    <ContentWrapper>
      <Banner />
      <form style={{ padding: "1rem", width: "25rem" }} onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <div style={{ marginBottom: "10px" }}>
              <Select
                placeholder="Select role"
                name="roleId"
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
              />
            </div>
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
            <Input
              type="text"
              name="phone"
              label="Phone"
              onChange={handleInputChange}
            />
          </>
        )}
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
          onIconClick={() => toggleShowPassword(false)}
        />
        {!isSignup && (
          <Link to="/auth/forget">
            <ForgotPass>
              <Button text="Forgot password?" type="link" />
            </ForgotPass>
          </Link>
        )}
        {isSignup && (
          <Input
            type={!showConfirmedPassword ? "password" : "text"}
            name="confirmPassword"
            label="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            iconName={!showConfirmedPassword ? "visibility" : "visibility_off"}
            onIconClick={() => toggleShowPassword(true)}
          />
        )}

        <Submit type="submit">{!isSignup ? "Sign in" : "Sign up"}</Submit>
        <AuthSwap>
          <span style={{ marginRight: "5px" }}>
            {!isSignup ? "Don't have account?" : "Already a member?"}
          </span>
          <Button
            text={!isSignup ? "Sign Up" : "Sign In"}
            type="link"
            onClick={toggleFormAuth}
          />
        </AuthSwap>
      </form>
    </ContentWrapper>
  );
};

export default Form;
