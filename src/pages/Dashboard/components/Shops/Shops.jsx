/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import EmptyState from "../../../../components/EmptyState/EmptyState";
import RouteAuth from "../../../../utils/routeAuth";
import { rules } from "../../../../utils/permissions";
import Create from "./Create";

export const x = () => <div>create</div>;
export const a = () => <div>first</div>;
export const y = () => <div>view</div>;

const Shops = ({ routes }) => {
  console.log("routeeeeee", routes);
  const { profile } = useSelector((state) => state);
  const { shops } = useSelector((state) => state.dashboard);

  return (
    <div>
      <div>blabla shops</div>
      {profile.roleId === 2 && <button type="button">Create shop</button>}
      <Switch>
        <RouteAuth
          path="/dashboard/shops"
          rule={rules.READ_SHOP}
          Component={a}
          exact
        />
        <RouteAuth
          path="/dashboard/shops/create"
          rule={rules.CREATE_SHOP}
          Component={Create}
        />
        <RouteAuth
          path="/dashboard/shops/yo"
          rule={rules.MANAGE_CART}
          Component={y}
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

Shops.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shops;
