import createApi from "./createApi";

export const postSignInData = (value) => {
  return createApi.post("/users/Login", JSON.stringify(value));
};
