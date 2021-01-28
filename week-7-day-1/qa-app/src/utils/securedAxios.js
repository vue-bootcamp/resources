import axios from "axios";
import store from "../store";

const appAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

appAxiosInstance.interceptors.request.use(config => {
  if (config?.headers?.noLoading === true) {
    store.state.loading = false;
  } else {
    store.state.loading = true;
  }
  return config;
});

appAxiosInstance.interceptors.response.use(response => {
  setTimeout(() => {
    store.state.loading = false;
  }, 500);
  return response;
});

export const appAxios = appAxiosInstance;
