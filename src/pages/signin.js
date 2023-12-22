import SignInContainer from "@/container/signin.container";
import { signInFieldList } from "@/description/signin.description";
import useUseRoute from "@/hooks/useUseRoute";
import Button from "@/shared/Button";
import Form from "@/shared/Form";
import { ternary } from "@/utils/javascript";

const SignIn = () => {
  const { handleBack } = useUseRoute();
  const {
    loader,
    signInField,
    formErrors,
    handleSignInChange,
    handleSignInSubmit,
  } = SignInContainer();

  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSignInSubmit}>
          <Form
            inputs={signInFieldList}
            field={signInField}
            onChange={handleSignInChange}
            formErrors={formErrors}
          />
          <Button type="submit" disabled={loader}>
            {ternary(loader, "...Loading", "Submit")}
          </Button>
          <Button onClick={() => handleBack()}>Back</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
