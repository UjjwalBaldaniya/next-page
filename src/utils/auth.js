// utils/auth.js
import Cookies from "js-cookie";
import { TOKEN_KEY } from "./constant";

export const setAuthToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 700000000000000000000,
  });
};

export const getAuthToken = () => {
  console.log("hello", Cookies.get());
  return Cookies.get(TOKEN_KEY);
};

export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};
