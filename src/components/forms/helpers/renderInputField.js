import React, { Fragment } from "react";

//warning: changing this component structure may cause height/weight converter to break

const renderInputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  id
}) => (
  <Fragment>
    <input {...input} placeholder={label} type={type} id={id} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </Fragment>
);

export default renderInputField;
