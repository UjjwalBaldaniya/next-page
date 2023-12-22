import SignUpContainer from "@/container/signup.container";
import {
  dropdownList,
  signUpFieldList,
} from "@/description/signup.description";
import useUseRoute from "@/hooks/useUseRoute";
import Button from "@/shared/Button";
import Form from "@/shared/Form";

const SignUp = () => {
  const { handleBack } = useUseRoute();
  const {
    signupField,
    formErrors,
    dropdown,
    handleSignupChange,
    handleSignupSubmit,
    setDropdown,
  } = SignUpContainer();

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignupSubmit}>
          <Form
            inputs={signUpFieldList}
            field={signupField}
            onChange={handleSignupChange}
            formErrors={formErrors}
          />
          <select
            value={dropdown.role}
            onChange={(e) => setDropdown(e.target.value)}
            defaultValue={"DEFAULT"}
            required
            className="select_dropdown"
          >
            {dropdownList.map((element, index) => (
              <option key={index + 1} {...element}>
                {element.name}
              </option>
            ))}
          </select>
          <Button type="submit">Submit</Button>
          <Button onClick={() => handleBack()}>Back</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
