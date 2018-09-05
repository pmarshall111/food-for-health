import React, { Component } from "react";
import UserManualSignIn from "./sub-components/UserManualSignIn";
import AuthSignin from "./sub-components/AuthSignin";

import "../../css/forms/UserSignInForm.css";
//this component will deal with clicks for auth buttons and also the form onsubmit

class UserSignInForm extends Component {
  render() {
    return (
      <div className="user-sign-in">
        <AuthSignin />
        <UserManualSignIn onSubmit={vals => console.log(vals)} />
      </div>
    );
  }
}

export default UserSignInForm;
