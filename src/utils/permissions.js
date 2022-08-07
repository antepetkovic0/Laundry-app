export const rules = {
  MANAGE_DASHBOARD: "MANAGE_DASHBOARD",
  MANAGE_USER: "MANAGE_USER",
  READ_SHOP: "READ_SHOP",
  CREATE_SHOP: "CREATE_SHOP",
  EDIT_SHOP: "EDIT_SHOP",
  DELETE_SHOP: "EDIT_SHOP",
  READ_PRODUCT: "READ_PRODUCT",
  CREATE_PRODUCT: "CREATE_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
  DELETE_PRODUCT: "EDIT_PRODUCT",
  READ_ORDER: "READ_ORDER",
  MANAGE_CART: "MANAGE_CART",
};

export const checkUserHavePermission = (rule, userPermission) => {
  if (!rule) {
    return false;
  }

  const permissions = userPermission.map((p) => p.title);

  return permissions.includes(rule);
};
