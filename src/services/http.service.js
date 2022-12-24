import axios from "axios";
import configFile from "../config.json";
import {localStorageService} from "./localStorage.service";
import {authService} from "./auth.service";
import router from "@/router";

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
  async function (config) {
    if (configFile.isFirebase) {
      const containerSlice = /\/$/gi.test(config.url);
      config.url =
        (containerSlice ? config.url.slice(0, -1) : config.url) +
        ".json";
      const expiresData = localStorageService.getExpiresTokenDate();
      const refreshToken = localStorageService.getRefreshToken();
      if (expiresData && refreshToken < Date.now) {
        const data = await authService.refresh();
        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          localId: data.user_id,
          expiresIn: data.expires_in
        });
      }
      const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.params = {...config.params, auth: accessToken};
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log(error);
    }
    if (error.response.status === 401) {
      router.push('/auth?message=auth')
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
};
export default httpService;
