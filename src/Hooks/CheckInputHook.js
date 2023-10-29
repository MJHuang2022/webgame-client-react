import { useCallback, useState } from "react";

const useCheckInputHook = (defaultChecked) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const check = useCallback((e) => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const resetCheckBox = useCallback(() => {
    setIsChecked(false);
  }, []);

  return { isChecked, check, resetCheckBox };
};

export default useCheckInputHook;
