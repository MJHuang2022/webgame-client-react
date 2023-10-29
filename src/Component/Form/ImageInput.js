import "./ImageInput.css";
import useImageInputHook from "../../Hooks/ImageInputHook";
import { useEffect } from "react";

const ImageInput = (props) => {
  const {
    fileRef,
    inputState,
    imgPreviewUrl,
    inputChangeHandler,
    chooseImgHandler,
    resetHandler,
  } = useImageInputHook(
    props.name,
    props.validator,
    props.onChange,
    props.originValue
  );

  const { bindReset, name, disabledInput} = props;
  useEffect(() => {
    bindReset(resetHandler, name);
  }, [bindReset, name, resetHandler]);

  useEffect(() => {
    if (disabledInput) {
      resetHandler();
    }
  }, [disabledInput, resetHandler]);

  return (
    <div
      className={`w3-container ${
        !inputState.isValid && inputState.isTouched && "w3-border-red w3-red"
      } ${props.inputClass}`}
    >
      <label htmlFor={props.name} className="w3-large">
        {props.text}
      </label>
      <div
        className="w3-container w3-border-gray"
        style={{ padding: 0, margin: 0 }}
      >
        <input
          id={props.name}
          name={props.name}
          ref={fileRef}
          className="w3-hide"
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={inputChangeHandler}
        />
        <div
          className="w3-container  w3-center"
          style={{ padding: 0, margin: 0 }}
        >
          <div className="w3-container">
            <img
              src={imgPreviewUrl}
              alt="preview"
              className="img-input-preview "
            />
          </div>
          <div className="w3-container w3-margin">
            <button
              className="w3-round-xlarge w3-pale-blue w3-padding w3-large"
              onClick={chooseImgHandler}
              disabled={props.disabledInput}
            >
              upload
            </button>
          </div>
        </div>
      </div>
      {!inputState.isValid && inputState.isTouched && (
        <p className="w3-text-white w3-small">{inputState.errorReson}</p>
      )}
    </div>
  );
};

export default ImageInput;
