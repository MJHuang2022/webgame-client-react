import { useCallback, useReducer } from "react";
import _ from "lodash";

const resetReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const data = { ...state };
      data[action.name] = action.resetHandler;
      return data;
    }
    case "RMV": {
      return _.omit(state, [action.name]);
    }
    default:
      return state;
  }
};

const useResetHook = () => {
  const [resetHandlers, dispatch] = useReducer(resetReducer, {});

  const triggerReset = useCallback(
    (ownerResetHandler) => {
      _.forEach(resetHandlers, (value, key) => {
        if (value) {
          value();
        }
      });

      if (ownerResetHandler) {
        ownerResetHandler();
      }
    },
    [resetHandlers]
  );

  const bindReset = useCallback((resetHandler, name) => {
    dispatch({ type: "ADD", name, resetHandler });
  }, []);

  const unbindReset = useCallback((name) => {
    dispatch({ type: "RMV", name });
  }, []);

  return { triggerReset, bindReset, unbindReset };
};

export default useResetHook;
