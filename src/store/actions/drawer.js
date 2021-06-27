export const OPEN_DRAWER = (drawerType) => `OPEN_${drawerType}_DRAWER`;
export const CLOSE_DRAWER = (drawerType) => `CLOSE_${drawerType}_DRAWER`;

export const openDrawer = (drawerType) => ({
  type: OPEN_DRAWER(drawerType),
  payload: true,
});

export const closeDrawer = (drawerType) => ({
  type: CLOSE_DRAWER(drawerType),
  payload: false,
});
