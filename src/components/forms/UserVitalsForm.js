import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import HeightAndWeightSwitcher from "./HeightAndWeightSwitcher";
import AgeEntry from "./AgeEntry";
import GenderEntry from "./GenderEntry";

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
  }

  render() {
    const { handleSubmit } = this.props;
    const { measurementSystem } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <GenderEntry />

          <div>
            <Field
              name="measurement system"
              component="select"
              onChange={e => this.measurementChange(e)}
            >
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </Field>
            <HeightAndWeightSwitcher
              measurementSystem={measurementSystem}
              imperialFieldNames={imperialFieldNames}
              metricFieldNames={metricFieldNames}
            />
          </div>

          <div>
            <label>
              <Field
                name="activity estimate"
                component="input"
                type="range"
                min="1"
                max="5"
              />Activity Estimate
            </label>
          </div>
        </div>

        <AgeEntry />

        <button type="submit">Submit</button>
      </form>
    );
  }

  measurementChange(e) {
    let newSystem = e.target.value;

    let currentVals = Array.from(e.target.nextSibling.children).map(x => {
      return Array.from(x.children).map(y => y.value);
    });

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

    // console.log({ currentVals, convertedValues });

    convertedValues.forEach((measurement, idx) => {
      //updating state
      this.props.change(
        newSystem == "imperial"
          ? imperialFieldNames[idx]
          : metricFieldNames[idx],
        measurement
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
