import useHttpClient from "../Hooks/HttpHook";
import { ForgotPwdDataSchema } from "../Auth/AuthDataSchema";
import Notification, {
  triggerNotification,
} from "../Component/Elements/Notification";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import { useCallback } from "react";
import Auth from "./Auth";
import { ForgotPwdInputSchema } from "./InputSchema";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";

const ForgotPwd = () => {
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const action = "fogotpwd";

  const onSubmit = useCallback(
    async (data) => {
      const request = { type: "forgotpwd", schema: ForgotPwdDataSchema, data };
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
        title={{ text: "Fetch Reset Token" }}
        schema={ForgotPwdInputSchema}
        footer={[
          {
            text: "Got the reset token?",
            linkPath: "/resetpwd",
            linkText: " Reset the password",
          },
          {
            text: "Got the Password?",
            linkPath: "/signin",
            linkText: " Sign in the account",
          },
        ]}
      />
      <ErrorAlert action={action} error={error} />
      <Notification action={action} title="Success to fetch reset token">
        <NavLink to="/resetpwd">Now you can use the token to RESET the password.</NavLink>
      </Notification>
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default ForgotPwd;
