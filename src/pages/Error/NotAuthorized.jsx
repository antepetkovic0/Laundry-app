import React from "react";
import { Link } from "react-router-dom";

import Small from "../../assets/images/401_small.jpg";
import Medium from "../../assets/images/401_medium.jpg";
import Large from "../../assets/images/401_large.jpg";
import Button from "../../components/core/Button/Button";

import { Wrapper, Image, MessageContainer, Message } from "./style";

const NotAuthorized = () => (
  <Wrapper>
    <Image
      src={Small}
      srcSet={`${Small} 500w, ${Medium} 1000w, ${Large} 2000w`}
      sizes="
          (min-width: 768px) 1000px,
          (min-width: 1440px) 2000px,
          100vw"
      alt="403"
    />
    <MessageContainer>
      <Message>
        Access denied! You are not authorized to view this page.
      </Message>
      <Link to="/app">
        <Button text="Go back" />
      </Link>
    </MessageContainer>
  </Wrapper>
);

export default NotAuthorized;
