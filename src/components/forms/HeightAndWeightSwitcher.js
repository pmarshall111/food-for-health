import React from "react";
import { Field, reduxForm } from "redux-form";

import renderInputField from "./helpers/renderInputField";

const HeightAndWeightSwitcher = props => {
  const { measurementSystem, metricFieldNames, imperialFieldNames } = props;

  let heightAndWeight;

  if (measurementSystem == "metric") {
    heightAndWeight = (
      <div>
        <label>
          <Field
            name={metricFieldNames[0]}
            component={renderInputField}
            type="number"
          />Height
        </label>
        <label>
          <Field
            name={metricFieldNames[1]}
            component={renderInputField}
            type="number"
          />Weight
        </label>
      </div>
    );
  } else {
    heightAndWeight = (
      <div>
        <label>
          <Field
            name={imperialFieldNames[0]}
            component={renderInputField}
            type="number"
          />
          <Field
            name={imperialFieldNames[1]}
            component={renderInputField}
            type="number"
          />Height
        </label>
        <label>
          <Field
            name={imperialFieldNames[2]}
            component={renderInputField}
            type="number"
          />
          <Field
            name={imperialFieldNames[3]}
            component={renderInputField}
            type="number"
          />Weight
        </label>
      </div>
    );
  }

  return heightAndWeight;
};

export default HeightAndWeightSwitcher;
