import Form from "../Component/Form/Form";
import useFormInputHook from "../Hooks/FormInputHook";
import PropertyInputSchema, {
  getPropertyEditorSchema,
} from "./PropertyInputSchema";
import _ from "lodash";
import useHttpClient from "../Hooks/HttpHook";
import { PropertyPatchDataSchema } from "./PropertyDataSchema";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import ErrorAlert, {
  triggerErrorAlert,
} from "../Component/Elements/ErrorAlert";
import LoadingSpinner from "../Component/Elements/LoadingSpinner";

const PropertyEditor = () => {
  const {
    isSummit,
    isInputValid,
    inputValueChangeCallback,
    summitCallback,
    resetCallback,
    bindReset,
  } = useFormInputHook(PropertyInputSchema);
  const { isWaitingRsp, error, sendRequestMsg } = useHttpClient();
  const authCtx = useContext(AuthContext);
  const action = "Update user property";

  const updateSummit = async (e) => {
    e.preventDefault();
    const data = summitCallback();
    if (!isInputValid || !data) {
      return;
    }

    const formData = new FormData();
    _.forEach(data, (value, key) => {
      formData.append(key, value);
    });

    const request = {
      type: "Update property",
      schema: PropertyPatchDataSchema,
      data: formData,
      jwt: authCtx.token,
    };
    // trigger to authentiction from server
    const result = await sendRequestMsg(request);
    if (!result) {
      // alert error modal
      return triggerErrorAlert(action);
    }

    authCtx.updateUser(result);
  };

  const PropertyEditorSchema = getPropertyEditorSchema(authCtx.user);
  return (
    <div className="w3-container" style={{ margin: "0", padding: "0" }}>
      <Form
        onSubmit={updateSummit}
        onChange={inputValueChangeCallback}
        schema={PropertyEditorSchema}
        formClass="w3-row-padding"
        inputClass="w3-half"
        onReset={resetCallback}
        bindReset={bindReset}
        isUpdateInput={true}
      />
      {isSummit && !isInputValid && (
        <p className="w3-button w3-red w3-center w3-block">
          The input param is error.
        </p>
      )}
      <ErrorAlert action={action} error={error} />
      {isWaitingRsp && <LoadingSpinner />}
    </div>
  );
};

export default PropertyEditor;
