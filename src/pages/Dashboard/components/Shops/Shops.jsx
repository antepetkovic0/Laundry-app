/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import EmptyState from "../../../../components/EmptyState/EmptyState";
import RouteAuth from "../../../../utils/routeAuth";
import { rules } from "../../../../utils/permissions";
import Create from "./Create";
import ShopList from "./ShopList";
import { getShops } from "../../../../api/shop";
import SpecificShop from "./SpecificShop";

export const x = () => <div>create</div>;
export const a = () => <div>first</div>;
export const y = () => <div>view</div>;

const Shops = () => {
  const { shops } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("running bajbi");
    if (!shops.length) {
      dispatch(getShops());
    }
  }, []);

  return (
    <div>
      {/* <div>blabla shops</div>
      {profile.roleId === 2 && <button type="button">Create shop</button>} */}
      <Switch>
        <RouteAuth
          path="/dashboard/shops"
          rule={rules.READ_SHOP}
          Component={ShopList}
          exact
        />
        <RouteAuth
          path="/dashboard/shops/create"
          rule={rules.CREATE_SHOP}
          Component={Create}
        />
        <RouteAuth
          path="/dashboard/shops/:slug"
          rule={rules.READ_SHOP}
          Component={SpecificShop}
        />
      </Switch>
      {/* <div>
        {!shops.length ? (
          <EmptyState
            message="Currently there are no created shops"
            imgCss={{
              maxWidth: "500px",
              width: "100%",
              borderRadius: "8px",
              marginTop: "1.5rem",
            }}
          />
        ) : (
          <div>shop list</div>
        )}
      </div> */}
    </div>
  );
};

export default Shops;
