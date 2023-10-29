import Input from "./Input";
import UpdateInput from './UpdateInput';

const Form = (props) => {
  return (
    <form
      className={`w3-container ${props.formClass}`}
      onSubmit={props.onSubmit}
    >
      {props.schema.map((e) => {
        if (!props.isUpdateInput) {
          return (
            <Input
              key={e.name}
              schema={e}
              onChange={props.onChange}
              inputClass={props.inputClass}
              bindReset={props.bindReset}
            />
          );
        } else {
          return (
            <UpdateInput
              key={e.name}
              schema={e}
              onChange={props.onChange}
              inputClass={props.inputClass}
              bindReset={props.bindReset}
              originValue={e.originValue}
            />
          );
        }
      })}
      <div className="w3-row w3-margin-top">
        <button
          className="w3-btn w3-round-xxlarge w3-teal w3-block w3-third"
          type="summit"
          style={{ margin: "0 30px" }}
        >
          Summit
        </button>
        <button
          type="reset"
          className="w3-btn w3-round-xxlarge w3-gray w3-block w3-text-white w3-third w3-right"
          onClick={props.onReset}
          style={{ margin: "0 30px" }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
