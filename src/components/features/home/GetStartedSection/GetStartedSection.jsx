import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../../Button/Button";

const GetStartedSection = () => {
  const isAuth = useSelector((state) => state.profile.isAuth);
  const linkTo = isAuth ? "/dashboard" : "/auth/sign-in";

  return (
    <section id="get-started" className="section section--get-started">
      <div className="hero">
        <h1 className="hero__title">All laundry services in one place</h1>
        <h2 className="hero__subtitle">
          Whether you are the laundry cleaning owner or just wanna clean your
          laundry we have something for you
        </h2>
        <Link to={linkTo}>
          <Button text="Get Started" />
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;
