import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { generateAvatar } from "./generateAvatar";

const AvatarBox = styled.div`
  width: ${({ size }) => {
    if (size === "medium") {
      return "6rem";
    }

    if (size === "large") {
      return "9rem";
    }

    return "3rem";
  }};
  height: ${({ size }) => {
    if (size === "medium") {
      return "6rem";
    }

    if (size === "large") {
      return "9rem";
    }

    return "3rem";
  }}; ;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: contain;
`;

const Avatar = ({ user, size }) => {
  const { picture, firstName, lastName } = user;

  const avatarSrc = useMemo(() => {
    if (picture) {
      return picture;
    }

    return generateAvatar(`${firstName[0]}${lastName[0]}`);
  }, [user]);

  return (
    <AvatarBox size={size}>
      <AvatarImage
        src={avatarSrc}
        alt="Avatar"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = generateAvatar(`${firstName[0]}${lastName[0]}`);
        }}
      />
    </AvatarBox>
  );
};

Avatar.defaultProps = {
  size: "small",
};

Avatar.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
};

export default Avatar;
