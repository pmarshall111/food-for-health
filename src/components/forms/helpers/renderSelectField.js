import React from "react";

const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  options
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>{options}</select>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default renderSelectField;
