import React, { useCallback, useContext, useState } from "react";
import useHttpClient from "../Hooks/HttpHook";
import Notification, {
  triggerNotification,
} from "../Component/Elements/Notification";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import { ModifyPwdInputSchema } from "./InputSchema";
import { NavLink } from "react-router-dom";
import { ModifyPwdDataSchema } from "./AuthDataSchema";
import Auth from "../Auth/Auth";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";
import AuthContext from "../Context/AuthContext";

const ModifyPwd = (props) => {
  const authCtx = useContext(AuthContext);
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const [signupError, setSignupError] = useState(error);
  const action = "modifypwd";

  const onSubmit = useCallback(
    async (data) => {
      if (data.password !== data.confirm_password) {
        // alert error modal
        setSignupError("The password is different with the confirm password.");
        return triggerErrorAlert(action);
      }

      const request = {
        type: "modify password",
        schema: ModifyPwdDataSchema,
        data,
        jwt: authCtx.token
      };
      // trigger to authentiction from server
      const result = await sendRequestMsg(request);
      if (!result) {
        // alert error modal
        return triggerErrorAlert(action);
      }

      // trigger signup success notification modal
      return triggerNotification(action);
    },
    [sendRequestMsg, authCtx.token]
  );

  return (
    <div className="w3-display-container">
      <Auth
        summit={onSubmit}
        title={{ text: "Modify Password" }}
        schema={ModifyPwdInputSchema}
        footer={[{
          text: "Don't want to modify password?",
          linkPath: "/user",
          linkText: " Go to check the property.",
        }]}
      />
      <ErrorAlert
        action={action}
        error={signupError.length === 0 ? error : signupError}
      />
      <Notification action={action} title="Success to modify password">
        <NavLink to="/signin">
          You need to signin the WebGame with the new password again.
        </NavLink>
      </Notification>
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default ModifyPwd;
