import React from "react";

import { useInput } from "../../../../hooks/useInput";
import RadioButton from "../../../shared/fields/Radio/RadioButton/RadioButton";

const SettingsLanguage = () => {
  const [language, { handleInputChange }] = useInput("en");
  return (
    <div className="language">
      <div className="language__item">
        <RadioButton
          id="language-en"
          name="language"
          label="English"
          value="en"
          onChange={handleInputChange}
          isChecked={language === "en"}
        />
      </div>
      <div className="language__item">
        <RadioButton
          id="language-hr"
          name="language"
          label="Hrvatski"
          value="hr"
          onChange={handleInputChange}
          isChecked={language === "hr"}
          isDisabled
        />
      </div>
    </div>
  );
};

export default SettingsLanguage;
