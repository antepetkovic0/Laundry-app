import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import User from "../../../assets/images/user.png";

const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 100%;
  object-fit: contain;
`;

const Avatar = ({ src }) => (
  <Wrapper>
    <Img src={src} />
  </Wrapper>
);

Avatar.defaultProps = {
  src: User,
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
