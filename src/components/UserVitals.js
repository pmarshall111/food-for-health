import React, { Component } from "react";
import UserVitalsForm from "./forms/UserVitalsForm";

class UserVitals extends Component {
  onSubmit(vals) {
    console.log(vals);
  }
  render() {
    return <UserVitalsForm onSubmit={this.onSubmit} />;
  }
}

export default UserVitals;

//content for this component

//Just one more thing!
//We need some details from you so that we can give you your individual nutrient requirements.

//the idea will be that they can enter all their details, then choose to create an account or link it to
//their google account.
