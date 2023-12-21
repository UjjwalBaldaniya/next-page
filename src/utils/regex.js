import { equal, lowerCase, ternary } from "./javascript";

export const notEmpty = (val) => {
  const regex = /[^\s]$/;
  return ternary(val, regex.test(val), false);
};

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(lowerCase(email));
};

export const passwordCheck = (password) => {
  if (password.length < 8) return "At least 8 characters";
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^\w\d\s]).{8,}$/;
  if (!regex.test(password))
    return "Your password is incorrect. Please try again";
};

export const stringValue = (val) => {
  const emptyRegex = /[^\s]$/;
  const isEmptyRegex = ternary(val, emptyRegex.test(val), false);
  if (!isEmptyRegex) {
    return notEmptyMessage;
  }
  const regex = /^[a-zA-Z]([\w -]*[a-zA-Z])?$/;
  if (!regex.test(val)) return "Sorry! No special characters or numbers";
};

export const confirmPassword = (confirmPass, pass) => equal(confirmPass, pass);
