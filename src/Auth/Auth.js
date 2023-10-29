import Form from "../Component/Form/Form";
import Authtitle from "./Authtitle";
import Authfooter from "./Authfooter";
import useFormInputHook from "../Hooks/FormInputHook";

const Auth = (props) => {
  const {
    isSummit,
    isInputValid,
    inputValueChangeCallback,
    summitCallback,
    resetCallback,
    bindReset,
  } = useFormInputHook(props.schema);

  const authSummit = (e) => {
    e.preventDefault();
    const data = summitCallback();
    if (!isInputValid || !data) {
      return;
    }

    props.summit(data);
  };

  return (
    <div className="app-content-container ">
      <div className="w3-card-4 w3-half w3-display-topmiddle">
        <Authtitle action={props.title.text} />
        <Form
          onSubmit={authSummit}
          onChange={inputValueChangeCallback}
          onReset={resetCallback}
          bindReset={bindReset}
          schema={props.schema}
        />
        {props.footer.map((footerItem, idx) => (
          <Authfooter
            key={`footer_${idx}`}
            text={footerItem.text}
            linkPath={footerItem.linkPath}
            linkText={footerItem.linkText}
          />
        ))}
        {isSummit && !isInputValid && (
          <button className="w3-button w3-red w3-center w3-block">
            The input param is error.
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
