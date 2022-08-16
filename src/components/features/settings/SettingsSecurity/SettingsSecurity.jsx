import React, { useState } from "react";

import { useInput } from "../../../../hooks/useInput";
import Button from "../../../core/Button/Button";
import InputField from "../../../shared/fields/InputField/InputField";
import CaretBackLink from "../../../shared/navigations/CaretBackLink/CaretBackLink";

const SettingsSecurity = () => {
  const [currentPassword, { handleInputChange: handleCurrentPasswordChange }] =
    useInput();
  const [newPassword, { handleInputChange: handleNewPasswordChange }] =
    useInput();
  const [
    newPasswordConfirm,
    { handleInputChange: handleNewPasswordConfirmChange },
  ] = useInput();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);

  const handleChangePassword = () => {};

  return (
    <>
      <CaretBackLink href="/app/settings" title="Change password" />
      <div className="change-password">
        <InputField
          type={showCurrentPassword ? "text" : "password"}
          name="current-password"
          label="Current password"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          iconName={showCurrentPassword ? "visibility_off" : "visibility"}
          onIconClick={() => setShowCurrentPassword((prev) => !prev)}
        />
        <InputField
          type={showNewPassword ? "text" : "password"}
          name="new-password"
          label="New password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          iconName={showNewPassword ? "visibility_off" : "visibility"}
          onIconClick={() => setShowNewPassword((prev) => !prev)}
        />
        <InputField
          type={showNewPasswordConfirm ? "text" : "password"}
          name="new-password-confirm"
          label="Confirm password"
          value={newPasswordConfirm}
          onChange={handleNewPasswordConfirmChange}
          iconName={showNewPasswordConfirm ? "visibility_off" : "visibility"}
          onIconClick={() => setShowNewPasswordConfirm((prev) => !prev)}
        />
        <Button
          onClick={handleChangePassword}
          text="Change password"
          fullWidth
        />
      </div>
    </>
  );
};

export default SettingsSecurity;
