import { toast } from "react-toastify";

const getBaseUrl = () => {
  let url = window.location;
  let baseUrl =
    url.protocol + "//" + url.host + "/" + url.pathname.split("/")[1];

  if (baseUrl.includes("localhost")) {
    baseUrl = "http://localhost:8000";
  } else {
    baseUrl = url.protocol + "//" + url.host;
  }

  return baseUrl;
};

export const BASE_URL = getBaseUrl();

export const getSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3550,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const getFailToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3550,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
