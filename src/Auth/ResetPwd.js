import useHttpClient from "../Hooks/HttpHook";
import { ResetPwdDataSchema } from "../Auth/AuthDataSchema";
import Notification, {
  triggerNotification,
} from "../Component/Elements/Notification";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import { useCallback } from "react";
import Auth from "./Auth";
import { ResetPwdInputSchema } from "./InputSchema";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";

const ForgotPwd = () => {
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const action = "fogotpwd";

  const onSubmit = useCallback(
    async (data) => {
      const request = { type: "forgotpwd", schema: ResetPwdDataSchema, data };
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
        title={{ text: "Reset Password" }}
        schema={ResetPwdInputSchema}
        footer={[
          {
            text: "Not got the reset token?",
            linkPath: "/forgotpwd",
            linkText: " Fetch the reset token",
          },
          {
            text: "Got the Password?",
            linkPath: "/signin",
            linkText: " Sign in the account",
          },
        ]}
      />
      <ErrorAlert action={action} error={error} />
      <Notification action={action} title="Success to reset password">
        <NavLink to="/signin">Now you can the password to signin.</NavLink>
      </Notification>
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default ForgotPwd;
