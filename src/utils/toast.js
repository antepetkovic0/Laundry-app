import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { TOAST_TYPE } from "./constants";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const ToastContent = ({ message }) => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <div>🚀</div>
    <div>{message}</div>
  </div>
);

export const toastMessage = (message, type) => {
  if (type === TOAST_TYPE.SUCCESS) {
    return toast.success(<ToastContent message={message} />, toastOptions);
  }
  if (type === TOAST_TYPE.ERROR) {
    return toast.error(<ToastContent message={message} />, toastOptions);
  }
  if (type === TOAST_TYPE.WARNING) {
    return toast.warning(<ToastContent message={message} />, toastOptions);
  }
  if (type === TOAST_TYPE.INFO) {
    return toast.info(<ToastContent message={message} />, toastOptions);
  }
  return toast(<ToastContent message={message} />, toastOptions);
};

ToastContent.propTypes = {
  message: PropTypes.string.isRequired,
};
