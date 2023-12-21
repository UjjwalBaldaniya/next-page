import {
  ConfirmPassword,
  Password,
  email,
  invalidEmailMessage,
  name,
  oldPassword,
  password,
  passwordMismatchMessage,
} from "./constant";
import { firstCapAndSplit } from "./javascript";
import {
  confirmPassword,
  emailValidation,
  notEmpty,
  passwordCheck,
  stringValue
} from "./regex";

const validation = (pattern, value, passwordValue) => {
  switch (pattern) {
    case name:
      if (!value) {
        return {
          isValid: notEmpty(value),
          message: `Please enter ${firstCapAndSplit(pattern)?.toLowerCase()}`,
        };
      }
      const output = stringValue(value);
      return { isValid: !output, message: output };

    case email:
      if (!value) {
        return {
          isValid: notEmpty(value),
          message: `Please enter ${firstCapAndSplit(pattern)?.toLowerCase()}`,
        };
      }

      return { isValid: emailValidation(value), message: invalidEmailMessage };

    case Password:
    case oldPassword:
    case password:
      if (!value) {
        return {
          isValid: notEmpty(value),
          message: `Please enter ${firstCapAndSplit(pattern)?.toLowerCase()}`,
        };
      }
      const res = passwordCheck(value);
      return { isValid: !res, message: res };

    case ConfirmPassword:
      return {
        isValid: confirmPassword(value, passwordValue),
        message: passwordMismatchMessage,
      };

    default:
      return { isValid: false };
  }
};

export default validation;
