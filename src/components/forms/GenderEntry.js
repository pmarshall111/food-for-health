import React from "react";
import { Field } from "redux-form";

import renderInputField from "./helpers/renderInputField";

import "../../css/GenderEntry.css";

const GenderEntry = props => {
  return (
    <div className="gender-entry">
      <Field
        name="gender"
        component="input"
        type="radio"
        value="male"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <Field
        name="gender"
        component={renderInputField}
        type="radio"
        value="female"
        id="female"
      />
      <label htmlFor="female">Female</label>
    </div>
  );
};

export default GenderEntry;
