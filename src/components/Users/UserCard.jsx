import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TableAction, TableActionsGroup } from "../../pages/Dashboard/style";
import { showDialog } from "../../store/actions/dialog";
import { DIALOG_TYPE } from "../../utils/constants";
import Icon from "../Icon/Icon";
import Tag from "../Tag/Tag";
import appearances from "../../constants/appearances";

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

function generateAvatar(text, foregroundColor, backgroundColor) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 60;
  canvas.height = 60;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "bold 20px system-ui";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
}

const UserCard = ({ user }) => {
  const { id, firstName, lastName, email, status, picture, roleId } = user;

  const dispatch = useDispatch();

  const tagAppearance = useMemo(() => {
    if (status === "ACTIVE") {
      return appearances.SUCCESS;
    }

    return appearances.WARNING;
  }, [status]);

  const handleUserDelete = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_USER_DELETE, { userId: id }));
  };

  const handleUserApprove = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_REQUEST_APPROVE, { userId: id }));
  };

  const handleUserDecline = () => {
    dispatch(showDialog(DIALOG_TYPE.ADMIN_REQUEST_DECLINE, { userId: id }));
  };

  return (
    <CardWrapper>
      <Avatar>
        <Img src={picture ?? generateAvatar("DD", "white", "green")} />
      </Avatar>
      <CardBody>
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <p>{roleId}</p>
        <Tag text={status} appearance={tagAppearance} />
      </CardBody>
      <TableActionsGroup>
        {status === "ACTIVE" ? (
          <TableAction onClick={handleUserDelete}>
            <Icon name="delete" />
          </TableAction>
        ) : (
          <>
            <TableAction onClick={handleUserApprove}>
              <Icon name="done" />
            </TableAction>
            <TableAction onClick={handleUserDecline}>
              <Icon name="clear" />
            </TableAction>
          </>
        )}
      </TableActionsGroup>
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
