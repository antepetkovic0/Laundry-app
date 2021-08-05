/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { useImageOnLoad } from "../../../../hooks/useImageOnLoad";

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

const ImgCont = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;
`;

const Img = styled.img`
  max-width: 100%;
  left: 0;
`;

const Card = ({ data }) => {
  const { title, description, imageS, imageL } = data;

  const { handleImageOnLoad, css } = useImageOnLoad();

  const image = {
    position: "absolute",
    width: `100%`,
    height: `100%`,
  };

  return (
    <Wrapper>
      <ImgCont>
        <div
          style={{
            ...image,
            ...css.thumbnail,
          }}
        />
        <Img
          src={imageS}
          srcSet={`${imageS} 500w, ${imageL} 1000w`}
          alt={title}
          onLoad={handleImageOnLoad}
          style={{
            ...image,
            ...css.fullSize,
          }}
        />
      </ImgCont>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

// Card.propTypes = {
//   image: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default Card;
