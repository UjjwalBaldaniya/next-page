import useUseRoute from "@/hooks/useUseRoute";
import { postSignInData } from "@/utils/api";
import { setAuthToken } from "@/utils/auth";
import { ACCESS_TOKEN } from "@/utils/constant";
import { setLocalStorageItem } from "@/utils/localStorage";
import validation from "@/utils/validation";
import { useState } from "react";

const SignInContainer = () => {
  const { handlePush } = useUseRoute();

  const [signInField, setSignInField] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    const error = validation(name, value);
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
    setSignInField({
      ...signInField,
      [name]: value,
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (Object.values(signInField).some((value) => value.trim() === "")) {
      // toast.error("Please fill out all fields");
    } else {
      postSignInData(signInField)
        .then((res) => {
          if (res.data.statusCode === 500) {
            toast.error(res.data.message);
          } else {
            if (res.data.data.token) {
              // localStorage.setItem("user", JSON.stringify(res.data.data));
              setLocalStorageItem(ACCESS_TOKEN, res?.data?.data);
              const token = res.data.data.token;
              setAuthToken(token);
              handlePush("/about");
              // res.json({ token });
              // if (res.data.data.role === "teacher") {
              //   navigate("/teacher/dashboard");
              // } else if (res.data.data.role === "student") {
              //   navigate("/student/dashboard");
              // }
              // toast.success(res.data.message);
            } else {
              return res.data.data;
            }
          }
        })
        .catch((error) => {
          // toast.error(error.response.data.message);
        });
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
