/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import Select from "react-select";

import { breakpoint } from "../../../styled/breakpoint";
import { theme } from "../../../styled/theme";
import Divider from "../../../components/Divider/Divider";
import Button from "../../../components/Button/Button";

import { auth, googleAuth } from "../../../api/auth";
import { toastMessage } from "../../../utils/toast";
import { authLabel } from "../../../utils/selectLabel";
import { DIALOG_TYPE, TOAST_TYPE } from "../../../utils/constants";
import { showDialog } from "../../../store/actions/dialog";
import { ContentWrapper, Banner, Submit } from "../style";
import Input, { Group } from "./Input";
import GoogleDialog from "./GoogleDialog";

const FormContainer = styled.form`
  padding: 3rem 1rem;
  margin: 0 auto;
  width: 25rem;

  @media ${breakpoint.tablet} {
    width: 35rem;
  }
`;

const NameContainer = styled.div`
  display: block;

  @media ${breakpoint.tablet} {
    display: flex;
    gap: 1rem;
    ${Group} {
      flex: 1;
    }
  }
`;

const ForgotPass = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: ${theme.gray.dark};
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
  text: "OR",
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
  const location = useLocation();
  const history = useHistory();

  const [form, setForm] = useState(
    initialState(location.state?.isSignup || false)
  );
  const [isSignup, setIsSignup] = useState(location.state?.isSignup || false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  console.log("form", form);

  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form", form);
    try {
      const { data } = await auth(form);
      if (data.message) {
        toastMessage(data.message, TOAST_TYPE.SUCCESS);
      } else {
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
  // const handleInputChange = useCallback(
  //   (e) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   },
  //   [setForm]
  // );

  const handleConfirmPasswordChange = useCallback(
    (e) => setConfirmPassword(e.target.value),
    []
  );

  const handleSelectChange = (e) => {
    setSelectedOption(e);
    setForm({ ...form, roleId: e.value });
  };
  // const handleSelectChange = useCallback(
  //   (e) => {
  //     setSelectedOption(e);
  //     setForm({ ...form, roleId: e.value });
  //   },
  //   [setForm]
  // );

  const handleGoogleResponse = async (response) => {
    dispatch(
      showDialog(DIALOG_TYPE.GOOGLE_AUTH, {
        googleCredential: response.credential,
      })
    );
  };

  useEffect(() => {
    // window.google.accounts.id.initialize({
    //   client_id:
    //     "18898452442-tg7rbb8f1tj8o7vvciqhmikj68sc2qbg.apps.googleusercontent.com",
    //   login_uri: "http://localhost:8080",
    //   callback: handleGoogleResponse,
    // });
    // window.google.accounts.id.renderButton(
    //   document.getElementById("googleButton"),
    //   {
    //     type: "icon",
    //     shape: "circle",
    //     size: "large",
    //     text: "continue_with",
    //   }
    // );
    // window.google.accounts.id.prompt();
  }, []);

  return (
    <ContentWrapper>
      <Banner />
      <FormContainer onSubmit={handleSubmit}>
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
            onChange={handleConfirmPasswordChange}
            iconName={!showConfirmedPassword ? "visibility" : "visibility_off"}
            // onIconClick={() => toggleShowPassword(true)}
          />
        )}
        <Submit type="submit">{!isSignup ? "Login" : "Sign up"}</Submit>
        <Divider {...dividerProps} />
        <div id="googleButton" />

        <AuthSwap>
          <span style={{ marginRight: "5px" }}>
            {!isSignup ? "Don't have account?" : "Joined us before?"}
          </span>
          <Button
            text={!isSignup ? "Sign up" : "Login"}
            type="link"
            onClick={toggleFormAuth}
          />
        </AuthSwap>
      </FormContainer>
      <GoogleDialog />
    </ContentWrapper>
  );
};

export default Form;
