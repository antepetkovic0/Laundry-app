import { checkUserHavePermission } from "../../../../utils/permissions";
// eslint-disable-next-line import/no-cycle
import { APP_ROUTES } from "../../../../pages/AppRoutes";

export const filterRoutesWithPermission = (permissions) => {
  const routesWithPermissionCheck = APP_ROUTES.map((route) => ({
    ...route,
    hasPermission: checkUserHavePermission(route.rule, permissions),
  }));

  return routesWithPermissionCheck.filter((item) => item.hasPermission);
};
