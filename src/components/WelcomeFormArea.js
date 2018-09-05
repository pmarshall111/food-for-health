import React, { Component } from "react";

import UserSignUpForm from "./forms/UserSignUpForm";
import UserSignInForm from "./forms/UserSignInForm";

import Switcher from "./Switcher";

import "../css/WelcomeFormArea.css";

class WelcomeFormArea extends Component {
  constructor(props) {
    super(props);

    this.changeForm = (e => {
      this.setState({ currForm: e.target.textContent });
    }).bind(this);

    this.options = [
      {
        desc: "Sign up",
        onClick: this.changeForm
      },
      {
        desc: "Log in",
        onClick: this.changeForm
      }
    ];
    this.state = {
      currForm: this.options[0].desc
    };
  }

  onSubmit(vals) {
    console.log(vals);
  }
  render() {
    const { currForm } = this.state;
    let formToDisplay =
      currForm == "Sign up" ? (
        <UserSignUpForm onSubmit={this.onSubmit} />
      ) : (
        <UserSignInForm onSubmit={this.onSubmit} />
      );

    return (
      <div className="welcome-form-area">
        <div>Ready to go?! I sure smS</div>
        <div className="form-area">
          <div className="switcher-container">
            <Switcher options={this.options} />
          </div>
          {formToDisplay}
        </div>
      </div>
    );
  }
}

export default WelcomeFormArea;

//content for this component

//Just one more thing!
//We need some details from you so that we can give you your individual nutrient requirements.

//the idea will be that they can enter all their details, then choose to create an account or link it to
//their google account.
