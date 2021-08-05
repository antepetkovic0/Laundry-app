import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../../components/Button/Button";

import Small from "../../assets/images/404_small.jpg";
import Medium from "../../assets/images/404_medium.jpg";
import Large from "../../assets/images/404_large.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: ${({ isAuthRelated }) => {
    if (isAuthRelated) {
      return "calc(100vh - 38px)";
    }
    return "100vh";
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: 75vh;
  object-fit: contain;
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Message = styled.div`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
  font-size: 1.6rem;
`;

const NotFound = ({ isAuthRelated }) => {
  const { path, url } = useRouteMatch();
  console.log("not found path", path, url);

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
      <Img
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
