import React from "react";
import { Field } from "redux-form";

import renderSelectField from "../helpers/renderSelectField";

const AgeEntry = props => {
  //chosen to end it at 76 as that's what this website says:
  // https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/
  let ages = new Array(75).fill(null).map((x, idx) => (idx == 0 ? "-" : idx));

  ages = ages.map(x => (
    <option value={x} key={`age option ${x}`}>
      {x}
    </option>
  ));

  //adding in options for those under 1 at the beginning.
  ages.splice(
    1,
    0,
    <option value={0.75} key="age option 0.75">
      6-12 months
    </option>
  );
  ages.splice(
    1,
    0,
    <option value={0.375} key="age option 0.375">
      3-6 months
    </option>
  );
  ages.splice(
    ages.length,
    0,
    <option value={75} key="age option old">
      Over 75
    </option>
  );

  return <Field name="age" component={renderSelectField} options={ages} />;
};

export default AgeEntry;
