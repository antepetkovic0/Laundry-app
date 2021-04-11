export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export const openDrawer = () => ({
  type: OPEN_DRAWER,
  value: true,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
  value: false,
});
