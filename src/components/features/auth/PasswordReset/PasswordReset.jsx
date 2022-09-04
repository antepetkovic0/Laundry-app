import React from "react";
import { useHistory } from "react-router-dom";

import { resetPassword } from "../../../../api/auth";
import { useInput } from "../../../../hooks/useInput";
import { useLocationQuery } from "../../../../hooks/useLocationQuery";
import InputField from "../../../shared/fields/InputField/InputField";

const PasswordReset = () => {
  const history = useHistory();
  const query = useLocationQuery();
  const token = query.get("token");
  const userId = query.get("userId");

  const [password, { handleInputChange }] = useInput();

  const handleResetPassword = async () => {
    resetPassword({ password, token, userId }, history);
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
