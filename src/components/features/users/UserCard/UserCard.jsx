/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { TAG_APPEARANCE } from "../../../../constants/tagAppearance";
import Icon from "../../../core/Icon/Icon";
import Tag from "../../../core/Tag/Tag";
import Avatar from "../../../shared/icons/Avatar/Avatar";
import { showDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../constants/dialogType";

const UserCard = ({ user }) => {
  const { id, firstName, lastName, email, status, roleId } = user;

  const dispatch = useDispatch();

  const tagAppearance = useMemo(() => {
    if (status === "ACTIVE") {
      return TAG_APPEARANCE.SUCCESS;
    }

    return TAG_APPEARANCE.WARNING;
  }, [status]);

  const roleText = useMemo(() => {
    if (roleId === 1) return "Admin";
    if (roleId === 2) return "Service";
    if (roleId === 3) return "User";
    return "";
  }, [roleId]);

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
    <div className="user-card">
      <Avatar user={user} size="small" />
      <div className="user-card__body">
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <div className="user-card__labels">
          <Tag text={roleText} />
          <Tag text={status} appearance={tagAppearance} />
        </div>
      </div>
      <div className="user-card__action-group">
        {status === "ACTIVE" ? (
          <div className="user-card__action-item" onClick={handleUserDelete}>
            <Icon name="delete" />
          </div>
        ) : (
          <>
            <div className="user-card__action-item" onClick={handleUserApprove}>
              <Icon name="done" />
            </div>
            <div className="user-card__action-item" onClick={handleUserDecline}>
              <Icon name="clear" />
            </div>
          </>
        )}
      </div>
    </div>
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
