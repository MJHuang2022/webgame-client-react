import TextInput from "./TextInput";
import ImageInput from "./ImageInput";

const Input = (props) => {
  const {
    originValue,
    schema,
    onChange,
    inputClass,
    bindReset,
    disabledInput,
  } = props;
  if (schema.element === "image") {
    return (
      <ImageInput
        // className="w3-image"
        key={schema.name}
        element={schema.element}
        name={schema.name}
        type={schema.type}
        text={schema.text}
        originValue={originValue}
        disabledInput={disabledInput}
        onChange={onChange}
        validator={schema.validator}
        inputClass={inputClass}
        bindReset={bindReset}
      />
    );
  } else {
    return (
      <TextInput
        key={schema.name}
        element={schema.element}
        name={schema.name}
        type={schema.type}
        text={`${schema.text} ${originValue ? ": " + originValue : ""}`}
        disabledInput={disabledInput}
        onChange={onChange}
        validator={schema.validator}
        inputClass={inputClass}
        bindReset={bindReset}
      />
    );
  }
};

export default Input;
