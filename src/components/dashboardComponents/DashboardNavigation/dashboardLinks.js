import { dashboardRoutes } from "../../../constants/routes";
import { checkPermission } from "../../../utils/permissions";

export const getDashboardLinksByRole = (permissions) => {
  const routesWithPermissionCheck = dashboardRoutes.map((route) => ({
    ...route,
    hasPermission: checkPermission(route.rule, permissions),
  }));

  return routesWithPermissionCheck.filter((item) => item.hasPermission);
};
