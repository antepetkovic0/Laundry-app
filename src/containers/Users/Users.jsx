import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchShops } from "../../api/shop";
import { showDialog } from "../../store/actions/dialog";
import { FETCH_SHOPS } from "../../store/actions/shops";
import { DIALOG_TYPE, Roles } from "../../utils/constants";
import ShopList from "../../components/ShopList/ShopList";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Users = () => {
  const [query, setQuery] = useState("");

  const { title } = useSelector((state) => state.profile.role);
  const { list } = useSelector((state) => state.shops);

  const filteredShops = list?.filter((shop) => shop.name.includes(query));

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (list === null) {
      dispatch(fetchShops(FETCH_SHOPS));
    }
  }, []);

  const handleDeleteShop = useCallback((shopId) => {
    dispatch(showDialog(DIALOG_TYPE.SHOP_DELETE, { shopId }));
  }, []);

  if (list === null) return null;

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
      <ShopList
        shops={filteredShops}
        roleTitle={title}
        onDeleteShop={handleDeleteShop}
      />
    </>
  );
};

export default Users;
