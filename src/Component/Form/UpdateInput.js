import { useEffect } from "react";
import useCheckInputHook from "../../Hooks/CheckInputHook";
import Input from "./Input";

const UpdateInput = (props) => {
  const { isChecked, check, resetCheckBox } = useCheckInputHook(false);
  const { originValue, schema, onChange, inputClass, bindReset } = props;

  useEffect(() => {
    bindReset(resetCheckBox, `CheckBox_${schema.name}`);
  }, [bindReset, resetCheckBox, schema.name]);

  return (
    <div className={`w3-display-container w3-padding ${inputClass}`}>
      <input
        type="checkbox"
        onChange={check}
        className="w3-check w3-display-left"
      />
      <Input
        key={schema.name}
        schema={schema}
        onChange={onChange}
        bindReset={bindReset}
        disabledInput={!isChecked}
        originValue={originValue}
      />
    </div>
  );
};

export default UpdateInput;
