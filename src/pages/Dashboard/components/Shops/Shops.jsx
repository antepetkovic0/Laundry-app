import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "../../../../components/PrivateRoute/PrivateRoute";
import { rules } from "../../../../utils/permissions";

import AllShops from "./AllShops";
import Create from "./Create";
import SpecificShop from "./SpecificShop";

const Shops = () => (
  <Switch>
    <PrivateRoute
      path="/dashboard/shops"
      rule={rules.READ_SHOP}
      component={AllShops}
      exact
    />
    <PrivateRoute
      path="/dashboard/shops/create"
      rule={rules.CREATE_SHOP}
      component={Create}
    />
    <PrivateRoute
      path="/dashboard/shops/:slug"
      rule={rules.READ_SHOP}
      component={SpecificShop}
    />
  </Switch>
);

export default Shops;
