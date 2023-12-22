import useUseRoute from "@/hooks/useUseRoute";
import { postSignInData } from "@/utils/api";
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

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const errors = ManageErrorList(signInField);

    if (length(keys(errors))) {
      setFormErrors(errors);
      console.log("first", errors);
    } else {
      console.log("home", signInField);
      
      postSignInData(signInField)
        .then((res) => {
          if (res.data.statusCode === 500) {
            toast.error(res.data.message);
          } else {
            if (res.data.data.token) {
              setLocalStorageItem(ACCESS_TOKEN, res?.data?.data);
              const token = res.data.data.token;
              setAuthToken(token);
              handlePush("/about");
            } else {
              return res.data.data;
            }
          }
        })
        .catch((error) => {});
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
