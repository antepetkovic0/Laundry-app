import React from "react";

import Button from "../Button/Button";

import { Section, HeadingContainer } from "./style";

const GetStarted = () => (
  <Section>
    <HeadingContainer>
      <h1>Yo niggas, cleaning has never been easier</h1>
      <h2>
        Wheter you are clean service owner or client, we ll handle your dirty
        laundry
      </h2>
      <Button buttonText="Get Started" />
    </HeadingContainer>
    <div>some image</div>
  </Section>
);

export default GetStarted;
