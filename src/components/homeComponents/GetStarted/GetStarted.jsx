import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styled/theme";
import Banner from "../../../assets/images/banner.jpg";
import Button from "../../Button/Button";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(251, 252, 255, 0.8),
      rgba(251, 252, 255, 0.8)
    ),
    url(${Banner});
  background-size: cover;
  background-position: top;
`;

const BannerTextContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 30rem;
  color: ${theme.text.def};
`;

const H1 = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: ${theme.text.alt};
`;

const GetStarted = () => {
  const { profile } = useSelector((state) => state);
  const { isAuth } = profile;

  const linkTo = isAuth ? "/dashboard" : "/sign-in";

  return (
    <Section id="get-started">
      <BannerTextContainer>
        <H1>All laundry services in one place</H1>
        <H2>
          Whether you are the laundry cleaning owner or just wanna clean your
          laundry we have something for you
        </H2>
        <Link to={linkTo}>
          <Button text="Get Started" />
        </Link>
      </BannerTextContainer>
    </Section>
  );
};

export default GetStarted;