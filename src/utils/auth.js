import Cookies from "js-cookie";
import { TOKEN_KEY } from "./constant";

export const setAuthToken = (token) => {
  if (token !== undefined && token !== null) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 7,
    });
  }
};

export const getAuthToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};
