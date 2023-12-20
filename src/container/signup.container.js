import validation from "@/utils/validation";
import { useState } from "react";

const SignUpContainer = () => {
  const [signupField, setSignupField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [dropdown, setDropdown] = useState("");

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    const error = validation(name, value);

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
    setSignupField({
      ...signupField,
      [name]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupField.role = dropdown;
    if (Object.values(signupField).some((value) => value === "")) {
    //   toast.error("Please fill out all fields");
    } else {
      //   postSignupData(signupField)
      //     .then((res) => {
      //       if (res.data.statusCode === 500) {
      //         toast.error(res.data.message);
      //       } else {
      //         toast.success(res.data.message);
      //       }
      //     })
      //     .catch((error) => {
      //       toast.error(error.message);
      //     });
    }
  };
  return {
    signupField,
    formErrors,
    dropdown,
    handleSignupChange,
    handleSignupSubmit,
    setDropdown,
  };
};

export default SignUpContainer;
