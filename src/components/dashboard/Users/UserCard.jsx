import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Actions from "./Actions";
import DeleteDialog from "./DeleteDialog";

const CardWrapper = styled.div`
  display: flex;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 100%;
  object-fit: contain;
`;

const CardBody = styled.div`
  flex: 1;
`;

const UserCard = ({ user }) => {
  const { id, firstName, lastName, email, status, picture, roleId } = user;

  return (
    <CardWrapper>
      <Avatar>
        <Img src={picture} />
      </Avatar>
      <CardBody>
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <p>{roleId}</p>
      </CardBody>
      <Actions userId={id} />
    </CardWrapper>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.string,
    picture: PropTypes.string,
    roleId: PropTypes.number,
  }).isRequired,
};

export default UserCard;
