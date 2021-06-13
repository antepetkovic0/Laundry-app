import React from "react";
import { Section, Intro, H1, H2 } from "./styled";
import Button from "../Button/Button";

const GetStarted = () => (
  <Section>
    <Intro>
      <H1>All laundry services in one place</H1>
      <H2>
        Whether you are the laundry cleaning owner or just wanna clean your
        laundry we have something for you
      </H2>
      <Button text="Get Started" />
    </Intro>
  </Section>
);

export default GetStarted;
