import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

import {
  maleFormulas,
  femaleFormulas
} from "../../../helpers/calorieEstimateFormulas";
import { fromFeetToMeters } from "../../../helpers/convertions/height";
import { fromStonesToKg } from "../../../helpers/convertions/weight";
import calcBMI from "../../../helpers/bmiCalculator";

import "../../../css/forms/CalorieEstimate.css";

//need to import form state

//probably will need to change form state when measurement changed from metric to imperial. probably will need to wipe out the one we aren't using
//so that we know which of the inputs is the updated one that the user has sumbitted.

//if needed, convert the inputs

//add into equation

//output result

class CalorieEstimate extends Component {
  render() {
    this.updateCalorieFigure();
    return (
      <div>
        <h3>Your daily calorie estimate:</h3>
        <h4>{this.kCalPerDay || "N/A"}</h4>
      </div>
    );
  }

  updateCalorieFigure() {
    console.log("updating");
    let {
      age,
      "activity estimate": activityLevel,
      gender,
      "height cm": heightMetric,
      "weight kg": weightMetric,
      "height feet": heightFeet,
      "height inches": heightInches,
      "weight stone": weightStone,
      "weight pounds": weightPounds
    } = this.props.formStates;

    if (heightFeet && heightInches)
      heightMetric = fromFeetToMeters(heightFeet, heightInches)[0];
    if (weightStone && weightPounds)
      weightMetric = fromStonesToKg(weightStone, weightPounds)[0];

    if (age && gender && heightMetric && weightMetric && activityLevel) {
      //bmi needs height in cm, calorie formulas needs height in m.
      let genderFormulas = gender == "male" ? maleFormulas : femaleFormulas;
      let formulaToUse;

      if (age <= 18) {
        let { bmi, obese } = calcBMI(weightMetric, heightMetric, age, gender);

        if (obese)
          formulaToUse = genderFormulas.find(x => obese == true).formula;
      }

      if (!formulaToUse)
        formulaToUse = genderFormulas.find(x => x.maxAge >= age).formula;

      this.kCalPerDay =
        formulaToUse(
          age,
          weightMetric,
          heightMetric / 100,
          activityLevel
        ).toFixed(0) + " kCal";
    } else this.kCalPerDay = "N/A";
  }
}

function mapStateToProps(state) {
  return {
    formStates: getFormValues("user vitals")(state)
  };
}

export default connect(mapStateToProps)(CalorieEstimate);
