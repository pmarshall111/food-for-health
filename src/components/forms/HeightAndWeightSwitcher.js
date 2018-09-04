import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

import renderInputField from "./helpers/renderInputField";

import "../../css/HeightAndWeightSwitcher.css";

const HeightAndWeightSwitcher = props => {
  const {
    measurementSystem,
    metricFieldNames,
    imperialFieldNames,
    measurementChange
  } = props;

  let heightAndWeight;

  if (measurementSystem == "metric") {
    heightAndWeight = (
      <Fragment>
        <label>Height</label>
        <div>
          <Field
            name={metricFieldNames[0]}
            component={renderInputField}
            type="number"
          />
          <label>cm</label>
        </div>
        <label>Weight</label>
        <div>
          <Field
            name={metricFieldNames[1]}
            component={renderInputField}
            type="number"
          />
          <label>kg</label>
        </div>
      </Fragment>
    );
  } else {
    heightAndWeight = (
      <Fragment>
        <label>Height</label>
        <div>
          <Field
            name={imperialFieldNames[0]}
            component={renderInputField}
            type="number"
          />
          <label>Ft</label>
          <Field
            name={imperialFieldNames[1]}
            component={renderInputField}
            type="number"
          />
          <label>Inches</label>
        </div>
        <label>Weight</label>
        <div>
          <Field
            name={imperialFieldNames[2]}
            component={renderInputField}
            type="number"
          />
          <label>St</label>
          <Field
            name={imperialFieldNames[3]}
            component={renderInputField}
            type="number"
          />
          <label>lbs</label>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <label>Units:</label>
      <Field
        name="measurement system"
        component="select"
        onChange={measurementChange}
      >
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </Field>
      {heightAndWeight}
    </Fragment>
  );
};

export default HeightAndWeightSwitcher;
