import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import HeightAndWeightSwitcher from "./HeightAndWeightSwitcher";
import AgeEntry from "./AgeEntry";
import GenderEntry from "./GenderEntry";
import ActivityEstimate from "./ActivityEstimate";
import NameEntry from "./NameEntry";
import CalorieEstimate from "./CalorieEstimate";

import UserManualSignIn from "./UserManualSignIn";
import AuthSignin from "./AuthSignin";

//use these components if we want to display error messages
import renderInputField from "./helpers/renderInputField";

import {
  fromFeetToMeters,
  fromMetersToFeet
} from "../../helpers/convertions/height";
import {
  fromStonesToKg,
  fromKgToStones
} from "../../helpers/convertions/weight";

import "../../css/UserVitalsForm.css";

//up here because we need to use it in validate function
const imperialFieldNames = [
  "height feet",
  "height inches",
  "weight stone",
  "weight pounds"
];
const metricFieldNames = ["height cm", "weight kg"];

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurementSystem: "metric"
    };
    this.measurementChange = this.measurementChange.bind(this);
  }

  render() {
    const { handleSubmit } = this.props;
    const { measurementSystem } = this.state;

    //NOTE: we want to have both sides of sign up and login mirroring eachother
    //so we need to have both login and signup parts within the same form -
    //so display:grid will affect both.

    return (
      <form onSubmit={handleSubmit} className="user-vitals-form">
        <div className="general">
          <div className=" halved-form-section">
            <label>Name:</label>
            <Field name="name" component={renderInputField} type="text" />
            <label>Age:</label>
            <AgeEntry />
            <label>Gender:</label>
            <GenderEntry />
          </div>
        </div>
        <div className="calorie-estimate">
          <div className="height-weight-switcher">
            <HeightAndWeightSwitcher
              measurementSystem={measurementSystem}
              imperialFieldNames={imperialFieldNames}
              metricFieldNames={metricFieldNames}
              measurementChange={e => this.measurementChange(e)}
            />

            <label>Activity Estimate</label>
            <ActivityEstimate
              initialValue={this.props.initialValues["activity estimate"]}
            />

            <div className="activity-info" />
          </div>
          <div className="estimate">
            <CalorieEstimate />
          </div>
        </div>
        <div className="signup-submit">
          <button type="submit">Submit</button>
        </div>
        <div className="auth-signin">
          <AuthSignin />
        </div>
        <div className="manual-signin">
          <UserManualSignIn />
        </div>
        <div className="signin-submit">
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }

  measurementChange(e) {
    let newSystem = e.target.value;

    // console.dir(e.target);

    //potentially brittle code here. would be easier to hook component directly into redux state, but apparently
    //this can seriously impact performance.
    let currentVals = Array.from(e.target.nextSibling.children)
      .filter(x => {
        return x.nodeName == "DIV";
      })
      .map(x => Array.from(x.children).map(x => x.value));

    if (currentVals.length == 4)
      currentVals = [
        [currentVals[0], currentVals[1]],
        [currentVals[2], currentVals[3]]
      ];

    let convertedValues = currentVals
      .map((z, idx) => {
        if (newSystem == "imperial") {
          return idx == 0 ? fromMetersToFeet(z) : fromKgToStones(z);
        } else {
          return idx == 0
            ? fromFeetToMeters(z[0], z[1])
            : fromStonesToKg(z[0], z[1]);
        }
      })
      .reduce((t, c) => t.concat(c), []);
    //^ flattening array after to make it easier to update state

    convertedValues.forEach((measurement, idx) => {
      //updating state
      this.props.change(
        newSystem == "imperial"
          ? imperialFieldNames[idx]
          : metricFieldNames[idx],
        measurement
      );
    });

    console.log({ convertedValues, currentVals, newSystem });

    //resetting hidden vals so that when we come to calc the calories, we know which measuremnt system has the updated values
    currentVals.forEach((measurement, idx) => {
      this.props.change(
        newSystem == "imperial"
          ? metricFieldNames[idx]
          : imperialFieldNames[idx],
        0
      );
    });

    this.setState({ measurementSystem: newSystem });
  }
}

const validate = vals => {
  const errors = {};

  if (vals["measurement system"] == "metric") {
    if (!vals[metricFieldNames[0]]) errors[metricFieldNames[0]] = "Required";
    else if (!vals[metricFieldNames[0]])
      errors[metricFieldNames[0]] = "Please enter a non-zero value";

    if (!vals[metricFieldNames[1]]) errors[metricFieldNames[1]] = "Required";
    else if (!vals[metricFieldNames[0]])
      errors[metricFieldNames[0]] = "Please enter a non-zero value";
  } else {
    if (!vals[imperialFieldNames[0]] && !vals[imperialFieldNames[1]])
      errors[imperialFieldNames[1]] = "Required";
    else if (
      vals[imperialFieldNames[0]] == 0 &&
      vals[imperialFieldNames[1]] == 0
    )
      errors[imperialFieldNames[1]] = "Please enter a non-zero value";

    if (!vals[imperialFieldNames[2]] && !vals[imperialFieldNames[3]])
      errors[imperialFieldNames[3]] = "Required";
    else if (
      vals[imperialFieldNames[2]] == 0 &&
      vals[imperialFieldNames[3]] == 0
    )
      errors[imperialFieldNames[3]] = "Please enter a non-zero value";
  }

  if (!vals.gender) errors.gender = "Required";
  if (!vals.age) errors.age = "Required";

  return errors;
};

const warn = vals => {
  const warnings = {};

  if (
    vals.gender &&
    vals.gender.match(/female/i) &&
    (!vals.age || vals.age > 10)
  )
    warnings.gender =
      "If you're pregnant, we cannot provide accurate information. Please see your doctor for recommendations.";

  return warnings;
};

const initialValues = {
  "measurement system": "metric",
  "activity estimate": 2
};

export default reduxForm({
  // a unique name for the form
  form: "user vitals",
  validate,
  warn,
  initialValues
})(ContactForm);
