export const checkUserHavePermission = (rule, userPermission) => {
  if (!rule) {
    return false;
  }

  const permissions = userPermission.map((p) => p.title);

  return permissions.includes(rule);
};
