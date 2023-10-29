import { useRef, useEffect, useState, useCallback } from "react";
import useInputHook from "./InputHook";

const useImageInputHook = (name, validator, onChange, defaultImageFile) => {
  const fileRef = useRef();
  const [imgPreviewUrl, setImgPreviewUrl] = useState(defaultImageFile);
  const { inputState, changeHandler, touchHandler, resetHandler } =
    useInputHook(name, validator, onChange, true);

  useEffect(() => {
    if (!inputState.value) {
      setImgPreviewUrl(defaultImageFile);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImgPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(inputState.value);
  }, [inputState.value, defaultImageFile]);

  const inputChangeHandler = useCallback(
    (e) => {
      let inputFile = null;
      const files = e.target.files;
      if (files && files.length === 1) {
        inputFile = files[0];
      }

      changeHandler({ target: { value: inputFile } });
      touchHandler(e);
    },
    [changeHandler, touchHandler]
  );

  const chooseImgHandler = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  return {
    fileRef,
    inputState,
    imgPreviewUrl,
    inputChangeHandler,
    chooseImgHandler,
    resetHandler,
  };
};

export default useImageInputHook;
