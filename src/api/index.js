import axios from "axios";

import store from "../store";
import { refreshToken } from "../slices/userSlice";

const instance = axios.create({
  /*  baseURL: "https://art-blog-demo.onrender.com/", */
  baseURL: "http://localhost:5000",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Accept, Authorization",
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(
  async (req) => {
    const accessToken = store.getState().userList.accessToken;
    if (!req.headers?.Authorization)
      req.headers.Authorization = `Bearer ${accessToken}`;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const config = err.config;
    if (err.response?.status === 401 && !config._retry) {
      config._retry = true;

      const newAccessToken = await store.dispatch(refreshToken());
      if (newAccessToken.meta.requestStatus === "fulfilled") {
        config.headers.Authorization = `Bearer ${newAccessToken.payload.data}`;
      }
      if (newAccessToken) return axios(config);
    }
    return Promise.reject(err);
  }
);

export default instance;
