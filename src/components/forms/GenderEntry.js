import React from "react";
import { Field } from "redux-form";

import renderInputField from "./helpers/renderInputField";

const GenderEntry = props => {
  return (
    <div>
      <label>Gender</label>
      <label>
        <Field name="gender" component="input" type="radio" value="male" />
        Male
      </label>
      <label>
        <Field
          name="gender"
          component={renderInputField}
          type="radio"
          value="female"
        />
        Female
      </label>
    </div>
  );
};

export default GenderEntry;
