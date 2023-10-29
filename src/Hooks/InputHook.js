import validate from "../Util/Validator";
import { useCallback, useReducer, useEffect } from "react";

const defaultValue = {
  value: "",
  isValid: true,
  isTouched: false,
  errorReson: "",
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      const valueObj = {};
      valueObj[action.name] = action.value;

      const { isValid, errorReson } = validate(valueObj, action.validator);
      return {
        ...state,
        value: action.value,
        isValid,
        errorReson,
      };
    }
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    case "RESET": {
      return defaultValue;
    }
    default:
      return state;
  }
};

const useInputHook = (name, validator, onChange, isSelectInput = false ) => {
  const [inputState, dispatch] = useReducer(inputReducer, defaultValue);

  const changeHandler = useCallback(
    (e) => {
      dispatch({
        type: "CHANGE",
        value: e.target.value,
        name,
        validator,
      });
    },
    [name, validator]
  );

  const touchHandler = useCallback((e) => {
    dispatch({ type: "TOUCH" });
  }, []);

  const resetHandler = useCallback(() => {
    dispatch({ type: "RESET" });
    onChange(name);
  }, [name, onChange]);

  useEffect(() => {
    if (inputState.isTouched || isSelectInput) {
      onChange(name, inputState.value, inputState.isValid);
    }
  }, [name, inputState, onChange, isSelectInput]);

  return { inputState, changeHandler, touchHandler, resetHandler };
};

export default useInputHook;
