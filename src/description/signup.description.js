export const dropdownList = [
  {
    name: "Select user",
    value: "DEFAULT",
    disabled: true,
  },
  {
    name: "teacher",
    value: "teacher",
    disabled: false,
  },
  {
    name: "student",
    value: "student",
    disabled: false,
  },
];

export const signUpFieldList = (
  formErrors,
  handleSignupChange,
  signupField
) => {
  return [
    {
      name: "name",
      type: "text",
      placeholder: "name",
      label: "Name :- ",
      showErrors: formErrors.name,
      onChange: handleSignupChange,
      value: signupField.name,
    },
    {
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email Id :- ",
      showErrors: formErrors.email,
      onChange: handleSignupChange,
      value: signupField.email,
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password :- ",
      showErrors: formErrors.password,
      onChange: handleSignupChange,
      value: signupField.password,
    },
  ];
};
