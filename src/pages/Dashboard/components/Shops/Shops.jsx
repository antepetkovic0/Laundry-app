import React from "react";
import { Switch } from "react-router-dom";

import RouteAuth from "../../../../utils/routeAuth";
import { rules } from "../../../../utils/permissions";

import AllShops from "./AllShops";
import Create from "./Create";
import SpecificShop from "./SpecificShop";

const Shops = () => (
  <Switch>
    <RouteAuth
      path="/dashboard/shops"
      rule={rules.READ_SHOP}
      Component={AllShops}
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
);

export default Shops;
