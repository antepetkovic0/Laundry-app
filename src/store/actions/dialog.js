export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";

export const showDialog = (type, props = {}) => ({
  type: SHOW_DIALOG,
  payload: {
    dialogType: type,
    dialogProps: { ...props },
  },
});

export const hideDialog = () => ({
  type: HIDE_DIALOG,
});
