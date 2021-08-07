import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import Select from "react-select";
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Banner from "./Banner";
import Input from "./Input";
import Divider from "../../../components/Divider/Divider";
import Button from "../../../components/Button/Button";

import Facebook from "../../../assets/images/facebook_small.png";
import Google from "../../../assets/images/google_small.png";

import { ContentWrapper, Submit } from "../style";
import { theme } from "../../../styled/theme";
import { authLabel } from "../../../utils/selectLabel";

import { login } from "../../../api/auth";
import { toastMessage } from "../../../utils/toast";
import { TOAST_TYPE, ROLE_ID } from "../../../utils/constants";

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
  { value: "1", label: authLabel("user") },
  { value: "2", label: authLabel("bussines service") },
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
};

const Form = () => {
  const { state } = useLocation();
  const history = useHistory();

  const [form, setForm] = useState(initialState(state?.isSignup || false));
  const [isSignup, setIsSignup] = useState(state?.isSignup || false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const toggleShowPassword = (isRepeatedPass) => {
    if (!isRepeatedPass) {
      setShowPassword(!showPassword);
      return;
    }
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await login(form);
    if (data) {
      const { roleId } = data.user;
      history.push(`/dashboard/${ROLE_ID[roleId]}`);
    }

    if (error) {
      toastMessage(error.data.error.message, TOAST_TYPE.ERROR);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e);
    setForm({ ...form, roleId: e.value });
  };

  const responseGoogle = (response) => {
    console.log("from gugl", response);
  };

  const responseFacebook = (response) => {
    console.log(response);
    console.log("facebook response");
  };

  const componentClicked = () => console.log("clicked");

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
              name="name"
              label="Name"
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
            onChange={handleInputChange}
            iconName={!showConfirmedPassword ? "visibility" : "visibility_off"}
            onIconClick={() => toggleShowPassword(true)}
          />
        )}

        <Submit type="submit">{!isSignup ? "Sign in" : "Sign up"}</Submit>

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {/* <Divider {...dividerProps} /> */}

        {/* <ServiceAuth>
          <GoogleLogin
            clientId="18898452442-tg7rbb8f1tj8o7vvciqhmikj68sc2qbg.apps.googleusercontent.com"
            render={(renderProps) => (
              <AuthBtn
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <AuthImg src={Google} />
              </AuthBtn>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <FacebookLogin
            appId="834081687533758"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            autoLoad
            render={(renderProps) => (
              <AuthBtn
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <AuthImg src={Facebook} />
              </AuthBtn>
            )}
          />
        </ServiceAuth> */}

        <AuthSwap>
          <span style={{ marginRight: "5px" }}>
            {!isSignup ? "Don't have account?" : "Already a member?"}
          </span>
          <Button
            text={!isSignup ? "Sign Up" : "Sign In"}
            type="link"
            onClick={() => setIsSignup(!isSignup)}
          />
        </AuthSwap>
      </form>
    </ContentWrapper>
  );
};

export default Form;
