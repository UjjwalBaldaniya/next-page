export const signInFieldList = (
  formErrors,
  handleSignInChange,
  signInField
) => {
  return [
    {
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email Id :- ",
      showErrors: formErrors.email,
      onChange: handleSignInChange,
      value: signInField.email,
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password :- ",
      showErrors: formErrors.password,
      onChange: handleSignInChange,
      value: signInField.password,
    },
  ];
};
