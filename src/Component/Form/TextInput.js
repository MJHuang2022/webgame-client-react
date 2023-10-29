import { useEffect } from "react";
import useInputHook from "../../Hooks/InputHook";

const TextInput = (props) => {
  const { inputState, changeHandler, touchHandler, resetHandler } =
    useInputHook(props.name, props.validator, props.onChange);

  const { bindReset, name, disabledInput } = props;
  useEffect(() => {
    bindReset(resetHandler, name);
  }, [bindReset, name, resetHandler]);

  useEffect(() => {
    if (disabledInput) {
      resetHandler();
    }
  }, [disabledInput, resetHandler]);

  let element;
  switch (props.element) {
    case "input": {
      element = (
        <input
          className="w3-input "
          id={props.name}
          name={props.name}
          type={props.type}
          autoComplete="off"
          value={inputState.value}
          onBlur={touchHandler}
          onChange={changeHandler}
          disabled={disabledInput}
        />
      );
      break;
    }
    case "textarea": {
      element = (
        <textarea
          className="w3-input"
          id={props.name}
          name={props.name}
          rows={props.rows || 3}
          value={inputState.value}
          autoComplete="off"
          onBlur={touchHandler}
          onChange={changeHandler}
          disabled={disabledInput}
        />
      );
      break;
    }
    default: {
      element = null;
      break;
    }
  }

  return (
    <div
      className={`w3-container ${
        !inputState.isValid && inputState.isTouched && "w3-border-red w3-red"
      } ${props.inputClass}`}
    >
      <label htmlFor={props.name} className="w3-large">
        {props.text}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className="w3-text-white w3-small">{inputState.errorReson}</p>
      )}
    </div>
  );
};

export default TextInput;
