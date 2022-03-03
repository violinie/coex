import React, { useState } from "react";

export const Input = ({ value, onChange, error, name, type, label: labelText, isRequired }) => {
  const [focused, setFocused] = useState(false);

  const formControlClasses = ["form-control my-4", focused && "form-control--focused", value && "form-control--has-value", error && "form-control--has-error"];
  return (
    <div className={formControlClasses.join(" ")}>
      <label className={"form-control__label"} htmlFor={name}>
        {labelText}
        {isRequired && <span>*</span>}
      </label>
      <input
        className={"form-control__input w-100"}
        type={type || "text"}
        name={name}
        onChange={onChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {error && <div className={"form-control__error"}>{error}</div>}
    </div>
  );
};
