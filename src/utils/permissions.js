export const rules = {
  MANAGE_DASHBOARD: "MANAGE_DASHBOARD",
  MANAGE_USER: "MANAGE_USER",
  READ_SHOP: "READ_SHOP",
  CREATE_SHOP: "CREATE_SHOP",
  EDIT_SHOP: "EDIT_SHOP",
  DELETE_SHOP: "EDIT_SHOP",
  READ_ORDER: "READ_ORDER",
  MANAGE_CART: "MANAGE_CART",
};

export const checkPermission = (rule, userPermissions) => {
  if (!rule) {
    return false;
  }

  const permissions = userPermissions.map((p) => p.title);
  return permissions.includes(rule);
};
