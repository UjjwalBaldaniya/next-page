import axios from "axios";
import { ACCESS_TOKEN } from "./constant";
import createApi from "./createApi";
import { getLocalStorageItem } from "./localStorage";
import { equal, isArray } from "./javascript";

export const postSignInData = (value) => {
  return createApi.post("/users/Login", JSON.stringify(value));
};

export const api = async (method, endpoint, isToken, body) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const token = getLocalStorageItem(ACCESS_TOKEN);

    const config = {
      url: `${baseURL}/${endpoint}`,
      method,
      headers: {},
      data: body,
    };
    if (isToken) config.headers["Authorization"] = "Bearer " + token;

    const res = await axios(config);
    console.log("aaa", res);
    return {
      status: true,
      ...res.data,
      arrayResponse: isArray(res.data) ? res.data : undefined,
    };
  } catch (err) {
    if (err.response && equal(err?.response?.status, 401))
      // eslint-disable-next-line no-console
      console.log(err);

    return {
      err: err.response?.data,
      status: false,
      statusCode: err.response?.status,
    };
  }
};
