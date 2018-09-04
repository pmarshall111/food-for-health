import React from "react";
import { Field } from "redux-form";

import renderInputField from "./helpers/renderInputField";

const NameEntry = props => {
  return (
    <div>
      <label>
        <Field name="name" component={renderInputField} type="text" />
        Name
      </label>
    </div>
  );
};

export default NameEntry;
