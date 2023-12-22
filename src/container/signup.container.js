import { ManageErrorList, keys, length } from "@/utils/javascript";
import validation from "@/utils/validation";
import { useState } from "react";

const SignUpContainer = () => {
  const [signupField, setSignupField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [dropdown, setDropdown] = useState("");

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupField({ ...signupField, [name]: value });
    const { isValid, message } = validation(name, value);
    setFormErrors({ ...formErrors, [name]: { isValid, message } });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const errors = ManageErrorList(signupField);
    signupField.role = dropdown;
    if (length(keys(errors))) {
      setFormErrors(errors);
      console.log("error", errors);
    } else {
      console.log("hello", signupField);
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
