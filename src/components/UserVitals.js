import React, { Component } from "react";

import UserVitalsForm from "./forms/UserVitalsForm";

class UserVitals extends Component {
  onSubmit(vals) {
    console.log(vals);
  }
  render() {
    return (
      <div>
        <div>Create an account, or continue as guest!</div>
        <UserVitalsForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default UserVitals;

//content for this component

//Just one more thing!
//We need some details from you so that we can give you your individual nutrient requirements.

//the idea will be that they can enter all their details, then choose to create an account or link it to
//their google account.
