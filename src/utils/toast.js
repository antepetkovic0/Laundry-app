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

export const toastMessage = (message, type) => {
  if (type === TOAST_TYPE.SUCCESS) {
    return toast.success(`🚀 ${message}`, toastOptions);
  }
  if (type === TOAST_TYPE.ERROR) {
    return toast.error(`🚀 ${message}`, toastOptions);
  }
  if (type === TOAST_TYPE.WARNING) {
    return toast.warning(`🚀 ${message}`, toastOptions);
  }
  if (type === TOAST_TYPE.INFO) {
    return toast.info(`👄 ${message}`, toastOptions);
  }
  return toast(`🦄 ${message}`, toastOptions);
};
