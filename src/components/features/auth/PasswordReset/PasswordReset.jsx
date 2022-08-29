import React from "react";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../../../../api/auth";
import { TOAST_TYPE } from "../../../../constants/toastType";
import { useInput } from "../../../../hooks/useInput";
import { useLocationQuery } from "../../../../hooks/useLocationQuery";
import { toastMessage } from "../../../../utils/toast";
import InputField from "../../../shared/fields/InputField/InputField";

const PasswordReset = () => {
  const history = useHistory();
  const query = useLocationQuery();
  const token = query.get("token");
  const userId = query.get("userId");

  const [password, { handleInputChange }] = useInput();

  const handleResetPassword = async () => {
    try {
      await resetPassword({ password, token, userId });
      toastMessage(
        "Password was succesfully reseted. Feel free to login with new credentials."
      );
      history.push("/auth/sign-in");
    } catch (err) {
      toastMessage("Failed to reset password", TOAST_TYPE.ERROR);
    }
  };

  return (
    <>
      <InputField
        name="email"
        type="email"
        label="Email"
        value={password}
        onChange={handleInputChange}
      />
      <p>Please enter new password.</p>
      <button
        type="button"
        className="auth__submit"
        onClick={handleResetPassword}
      >
        Reset password
      </button>
    </>
  );
};

export default PasswordReset;
