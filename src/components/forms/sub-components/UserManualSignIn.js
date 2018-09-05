import React from "react";

import { Field, reduxForm } from "redux-form";

import renderInputField from "../helpers/renderInputField";

const UserManualSignIn = props => {
  return (
    <div>
      <form className="halved-form-section" onSubmit={props.onSubmit}>
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
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "user-sign-in" })(UserManualSignIn);
