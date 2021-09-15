import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

import Small from "../../assets/images/404_small.jpg";
import Medium from "../../assets/images/404_medium.jpg";
import Large from "../../assets/images/404_large.jpg";
import Button from "../../components/Button/Button";

import { Wrapper, Image, MessageContainer, Message } from "./style";

const NotFound = ({ isAuthRelated }) => {
  const { path } = useRouteMatch();

  const generateText = (currPath) => {
    if (currPath === "/" || currPath === "/auth") {
      return "Back to homepage";
    }
    return "Back to dashboard";
  };

  const generatePath = (currPath) => {
    if (currPath === "/" || currPath === "/auth") {
      return "/";
    }
    return "/dashboard";
  };

  return (
    <Wrapper isAuthRelated={isAuthRelated}>
      <Image
        src={Small}
        srcSet={`${Small} 500w, ${Medium} 1000w, ${Large} 2000w`}
        sizes="
          (min-width: 768px) 1000px,
          (min-width: 1440px) 2000px,
          100vw"
        alt="404"
      />
      <MessageContainer>
        <Message>
          Oops, we are unable to find the page you are looking for.
        </Message>
        <Link to={generatePath(path)}>
          <Button text={generateText(path)} />
        </Link>
      </MessageContainer>
    </Wrapper>
  );
};

NotFound.defaultProps = {
  isAuthRelated: false,
};

NotFound.propTypes = {
  isAuthRelated: PropTypes.bool,
};

export default NotFound;
