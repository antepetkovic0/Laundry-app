/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";

const Wrapper = styled.div`
  width: 25rem;
  padding: 1rem;
  background-color: ${theme.bg.def};
  border: 0.1rem solid ${theme.neutral.four};
  border-radius: 0.3rem;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const Card = ({ data }) => {
  const { title, description, imageS, imageL } = data;
  return (
    <Wrapper>
      <Img
        src={imageS}
        srcSet={`${imageS} 500w, ${imageL} 1000w`}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
};

// Card.propTypes = {
//   image: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default Card;
