import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  let {
    inputLabel,
    inputType,
    inputName,
    inputValue,
    onHandleChange,
    errorMessage,
    errorClass,
    customClass,
    checked,
    min,
    max
  } = props;

  return (
    <>
      <div className={customClass}>
        <label htmlFor={inputName}>{inputLabel}</label>
        <input
          type={inputType}
          name={inputName}
          id={inputType === 'radio' ? inputValue : inputName}
          value={inputValue}
          onChange={onHandleChange}
          checked={checked}
          autoComplete = {inputType === 'password' ? 'off' : 'on'}
          min={min}
          max={max}
        />
      </div>
      {errorMessage !== "" && <p className={errorClass}>{errorMessage}</p>}
    </>
  );
};

export default FormInput;
