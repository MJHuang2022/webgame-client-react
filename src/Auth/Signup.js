import { useCallback, useState } from "react";
import Auth from "./Auth";
import { SignupInputSchema } from "./InputSchema";
import Notification, {
  triggerNotification,
} from "../Component/Elements/Notification";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import { NavLink } from "react-router-dom";
import useHttpClient from "../Hooks/HttpHook";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";
import { SignupDataSchema } from "./AuthDataSchema";

const Signup = () => {
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const [signupError, setSignupError] = useState(error);
  const action = "Signup";

  const onSubmit = useCallback(
    async (data) => {
      if (data.password !== data.confirm_password) {
        // alert error modal
        setSignupError("The password is different with the confirm password.");
        return triggerErrorAlert(action);
      }

      setSignupError("");
      const request = { type: "signup", schema: SignupDataSchema, data };
      // trigger to authentiction from server
      const result = await sendRequestMsg(request);
      if (!result) {
        // alert error modal
        return triggerErrorAlert(action);
      }

      // trigger signup success notification modal
      return triggerNotification(action);
    },
    [sendRequestMsg]
  );

  return (
    <div className="w3-display-container">
      <Auth
        summit={onSubmit}
        title={{ text: "Sign up to WebGame" }}
        schema={SignupInputSchema}
        footer={[
          {
            text: "Had an account?",
            linkPath: "/signin",
            linkText: " Sign in the account",
          },
        ]}
      />
      <ErrorAlert
        action={action}
        error={signupError.length === 0 ? error : signupError}
      />
      <Notification action={action} title="Success to signup">
        <NavLink to="/signin">Now you can signin the WebGame.</NavLink>
      </Notification>
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default Signup;
