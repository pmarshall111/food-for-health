import React from "react";
import { Field } from "redux-form";

import renderSelectField from "./helpers/renderSelectField";

const AgeEntry = props => {
  //chosen to end it at 76 as that's what this website says:
  // https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/
  let ages = new Array(75)
    .fill(null)
    .map((x, idx) => (idx == 0 ? "-" : idx + 1));

  ages.push("Over 75");

  ages = ages.map(x => (
    <option value={x} key={`age option ${x}`}>
      {x}
    </option>
  ));

  return (
    <div>
      <label>
        <Field name="age" component={renderSelectField} options={ages} />
        Age
      </label>
    </div>
  );
};

export default AgeEntry;
