import SignUpContainer from "@/container/signup.container";
import {
  dropdownList,
  signUpFieldList,
} from "@/description/signup.description";
import useUseRoute from "@/hooks/useUseRoute";
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

  const signUpList = signUpFieldList(
    formErrors,
    handleSignupChange,
    signupField
  );

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignupSubmit}>
          <Form inputs={signUpList} />
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
          <button type="submit">Submit</button>
          <button onClick={() => handleBack()}>Back</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
