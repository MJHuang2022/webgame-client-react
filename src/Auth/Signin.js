import { useCallback, useContext } from "react";
import Auth from "./Auth";
import { SigninInputSchema } from "./InputSchema";
import { SigninDataSchema } from "./AuthDataSchema";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import useHttpClient from "../Hooks/HttpHook";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";

const Signin = () => {
  const authCtx = useContext(AuthContext);
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const action = "Signin";

  const onSubmit = useCallback(
    async (data) => {
      const request = { type: "signin", schema: SigninDataSchema, data };

      // trigger to authentiction from server
      const result = await sendRequestMsg(request);
      if (!result) {
        // alert error modal
        return triggerErrorAlert(action);
      }

      authCtx.signin(result);
    },
    [authCtx, sendRequestMsg]
  );

  if (authCtx.isSignined) {
    return <Navigate to="/user" />;
  }

  return (
    <div className="w3-display-container">
      <Auth
        summit={onSubmit}
        title={{ text: "Sign in to WebGame" }}
        schema={SigninInputSchema}
        footer={[
          {
            text: "New to WebGame?",
            linkPath: "/signup",
            linkText: " Create an account",
          },
          {
            text: "Forgot the password?",
            linkPath: "/forgotpwd",
            linkText: " Reset the password",
          },
        ]}
      />
      <ErrorAlert action={action} error={error} />
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default Signin;
