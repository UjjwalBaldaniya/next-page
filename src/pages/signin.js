import SignInContainer from "@/container/signin.container";
import { signInFieldList } from "@/description/signin.description";
import useUseRoute from "@/hooks/useUseRoute";
import Form from "@/shared/Form";

const SignIn = () => {
  const { handleBack } = useUseRoute();
  const { signInField, formErrors, handleSignInChange, handleSignInSubmit } =
    SignInContainer();

  const signInList = signInFieldList(
    formErrors,
    handleSignInChange,
    signInField
  );
  
  return (
    <>
      <div>
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSignInSubmit}>
            <Form inputs={signInList} />
            <button type="submit">Submit</button>
            <button onClick={() => handleBack()}>Back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
