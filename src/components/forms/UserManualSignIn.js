import React from "react";
import { Field } from "redux-form";

import renderInputField from "./helpers/renderInputField";

const UserManualSignIn = props => {
  return (
    <div className="halved-form-section">
      <label htmlFor="email">Email</label>
      <Field
        name="email"
        component={renderInputField}
        type="email"
        id="email"
      />
      <label htmlFor="pass">Password</label>
      <Field
        name="password"
        component={renderInputField}
        type="password"
        id="pass"
      />
    </div>
  );
};

export default UserManualSignIn;
