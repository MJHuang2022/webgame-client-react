import { useCallback, useReducer, useState } from "react";
import _ from "lodash";
import useResetHook from "./ResetHook";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET": {
      const data = { ...state };
      data[action.name] = {
        value: action.value,
        isValid: action.isValid,
      };
      return data;
    }
    case "ERASE": {
      return _.omit(state, [action.name]);
    }
    case "RESET": {
      return {};
    }
    default:
      return state;
  }
};

const useFormInputHook = (schema) => {
  const [isSummit, setIsSummit] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const { triggerReset, bindReset } = useResetHook();

  const [formData, dispatch] = useReducer(formReducer, {});
  const inputValueChangeCallback = useCallback(
    (name, value = null, isValid = null) => {
      if (_.isNil(value) && _.isNil(isValid)) {
        dispatch({
          type: "ERASE",
          name,
        });
      } else {
        dispatch({
          type: "SET",
          name,
          value,
          isValid,
        });
      }
    },
    []
  );

  const summitCallback = useCallback(() => {
    let isValid = true;
    let data = {};
    let errorInput = [];
    schema.forEach((element) => {
      const inputResult = formData[element.name];
      if (inputResult) {
        if (!inputResult.isValid && !inputResult.errorInput) {
          errorInput.push(element.name);
        } else {
          data[element.name] = inputResult.value;
        }
      }
    });

    if (_.isEmpty(data) || !_.isEmpty(errorInput)) {
      isValid = false;
      data = null;
    }

    setIsInputValid(isValid);
    setIsSummit(true);
    return data;
  }, [formData, schema]);

  const resetCallback = useCallback(() => {
    triggerReset();
  }, [triggerReset]);

  return {
    isSummit,
    isInputValid,
    inputValueChangeCallback,
    summitCallback,
    resetCallback,
    bindReset,
  };
};

export default useFormInputHook;
