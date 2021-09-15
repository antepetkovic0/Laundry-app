import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import RegisterImg from "../../../assets/images/register_feature_small.jpg";

import { theme } from "../../../styled/theme";
import { breakpoint } from "../../../styled/breakpoint";

const Wrapper = styled.div`
  padding: 1rem 3rem;
  background-image: linear-gradient(
      300deg,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(56, 97, 251, 0.2) 90%
    ),
    url(${RegisterImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  min-height: 15rem;

  @media ${breakpoint.tablet} {
    width: 30rem;
  }
`;

const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${theme.white};
`;

const Banner = () => {
  const location = useLocation();

  const generateText = (loc) => {
    if (loc.pathname === "/auth/forget") {
      return "Forget password?";
    }
    if (loc.pathname === "/auth" && loc.state?.isSignup) {
      return "Create account";
    }
    return "Welcome back";
  };

  return (
    <Wrapper>
      <Text>{generateText(location)}</Text>
    </Wrapper>
  );
};

export default Banner;
