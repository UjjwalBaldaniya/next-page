import useUseRoute from "@/hooks/useUseRoute";
import { api } from "@/utils/api";
import { setAuthToken } from "@/utils/auth";
import { ACCESS_TOKEN } from "@/utils/constant";
import { ManageErrorList, keys, length } from "@/utils/javascript";
import { setLocalStorageItem } from "@/utils/localStorage";
import validation from "@/utils/validation";
import { useState } from "react";

const SignInContainer = () => {
  const { handlePush } = useUseRoute();

  const [signInField, setSignInField] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInField({ ...signInField, [name]: value });
    const { isValid, message } = validation(name, value);
    setFormErrors({ ...formErrors, [name]: { isValid, message } });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const errors = ManageErrorList(signInField);

    if (length(keys(errors))) {
      setFormErrors(errors);
    } else {
      const res = await api("POST", "users/Login", false, {
        email: signInField.email,
        password: signInField.password,
      });

      if (res?.status) {
        const { data } = res;
        setLocalStorageItem(ACCESS_TOKEN, data);
        setAuthToken(data?.token);
        handlePush("/about");
      } else {
        console.error("Login failed:", res?.data);
      }
    }
  };

  return {
    signInField,
    formErrors,
    handleSignInChange,
    handleSignInSubmit,
  };
};

export default SignInContainer;
