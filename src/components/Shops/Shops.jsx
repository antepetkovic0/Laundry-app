import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../core/Button/Button";
import { Roles } from "../../utils/constants";
import ShopList from "./ShopList";
import { useDebounce } from "../../hooks/useDebounce";

const Shops = () => {
  const { title } = useSelector((state) => state.profile.role);
  const [query, setQuery] = useState("");

  const history = useHistory();

  const debouncedQuery = useDebounce(query, 750);

  return (
    <>
      <h2>Shops</h2>
      <p>
        Intro message to shops page. Feel free to search all available services.
      </p>
      <div style={{ display: "flex" }}>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search shops by name"
          iconName="search"
        />
        {title === Roles.SERVICE && (
          <Button
            text="Create shop"
            onClick={() => history.push("/dashboard/shops/create")}
          />
        )}
      </div>
      <ShopList search={debouncedQuery} />
    </>
  );
};

export default Shops;
