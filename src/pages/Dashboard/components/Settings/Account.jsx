import React, { useState } from "react";
import Input from "../../../Auth/components/Input";

const Account = () => {
  const [name, setName] = useState();

  return (
    <form>
      <div style={{ display: "flex" }}>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          // onChange={handleInputChange}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          // onChange={handleInputChange}
        />
      </div>
      <Input
        type="text"
        name="displayName"
        label="Display Name"
        // onChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        // onChange={handleInputChange}
      />
    </form>
  );
};

export default Account;
