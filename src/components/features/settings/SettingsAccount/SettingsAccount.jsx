/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInput } from "../../../../hooks/useInput";
import Button from "../../../core/Button/Button";
import CaretBackLink from "../../../shared/navigations/CaretBackLink/CaretBackLink";
import InputField from "../../../shared/fields/InputField/InputField";
import TextAreaField from "../../../shared/fields/TextAreaField/TextAreaField";
import Avatar from "../../../shared/icons/Avatar/Avatar";
import Icon from "../../../core/Icon/Icon";
import { showDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../constants/dialogType";
import EditAvatarDialog from "./EditAvatarDialog/EditAvatarDialog";

const SettingsAccount = () => {
  const profile = useSelector((state) => state.profile);

  const [firstName, { handleInputChange: handleFirstNameChange }] = useInput(
    profile.firstName
  );
  const [lastName, { handleInputChange: handleLastNameChange }] = useInput(
    profile.lastName
  );
  const [displayName, { handleInputChange: handleDisplayNameChange }] =
    useInput(profile.displayName);
  const [email, { handleInputChange: handleEmailChange }] = useInput(
    profile.email
  );
  const [phone, { handleInputChange: handlePhoneChange }] = useInput(
    profile.phone
  );
  const [about, { handleInputChange: handleAboutChange }] = useInput(
    profile.about
  );

  const dispatch = useDispatch();

  const handleAvatarEditClick = () => {
    dispatch(
      showDialog(DIALOG_TYPE.AVATAR_EDIT, { avatarUrl: profile.picture })
    );
  };

  const handleSaveSettings = () => {
    // TODO: api call
  };

  return (
    <div className="account">
      <CaretBackLink href="/app/settings" title="Account" />
      <div className="account__avatar">
        <Avatar user={profile} size="large" />
        <div className="account__edit" onClick={handleAvatarEditClick}>
          <Icon name="edit" />
        </div>
      </div>
      <InputField
        type="text"
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <InputField
        type="text"
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <InputField
        type="text"
        name="displayName"
        label="Display Name"
        value={displayName}
        onChange={handleDisplayNameChange}
      />
      <InputField
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <InputField
        type="phone"
        name="phone"
        label="Phone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <TextAreaField
        name="about"
        label="About"
        value={about}
        onChange={handleAboutChange}
      />
      <Button
        onClick={handleSaveSettings}
        text="Save account settings"
        fullWidth
      />
      <EditAvatarDialog />
    </div>
  );
};

export default SettingsAccount;
