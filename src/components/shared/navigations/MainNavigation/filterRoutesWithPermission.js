import { APP_ROUTES } from "../../../../constants/routes";
import { checkUserHavePermission } from "../../../../utils/permissions";

export const filterRoutesWithPermission = (permissions) => {
  const routesWithPermissionCheck = APP_ROUTES.map((route) => ({
    ...route,
    hasPermission: checkUserHavePermission(route.rule, permissions),
  }));

  return routesWithPermissionCheck.filter((item) => item.hasPermission);
};
