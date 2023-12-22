import axios from "axios";
import { ACCESS_TOKEN } from "./constant";
import { equal, isArray } from "./javascript";
import { getLocalStorageItem } from "./localStorage";


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

    return {
      status: true,
      ...res.data,
      arrayResponse: isArray(res.data) ? res.data : undefined,
    };
  } catch (err) {
    if (err.response && equal(err?.response?.status, 401)) logout();
    console.log(err);

    return {
      err: err.response?.data,
      status: false,
      statusCode: err.response?.status,
    };
  }
};
