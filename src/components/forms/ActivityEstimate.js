import React, { Component } from "react";
import { Field } from "redux-form";

import "../../css/ActivityEstimate.css";

class ActivityEstimate extends Component {
  constructor(props) {
    super(props);
    this.activityLevels = [
      { title: "Sedentary", desc: "Little to no exercise" },
      { title: "Lightly Active", desc: "Excercise/sports 1-3 times per week" },
      {
        title: "Active",
        desc: "Exercise/sports 3-5 times per week"
      },
      { title: "Very Active", desc: "Hard exercise/sports 6-7 times per week" }
    ];

    this.ticks = [];
  }

  onChange(e) {
    this.changeInputBackground(e.target.value);
  }

  componentDidMount() {
    const { initialValue } = this.props;
    this.changeInputBackground(initialValue);
  }

  changeInputBackground(currPosition) {
    //first updating the slider style
    if (!this.styleSheet) {
      this.styleSheet = document.createElement("style");
      document.body.appendChild(this.styleSheet);
    }

    let activityInput = document.querySelector(
      ".activity-input-container input"
    );
    let percentage =
      (currPosition - 1) / (this.activityLevels.length - 1) * 100;

    let prefixes = [
      "-webkit-slider-runnable-track",
      "-moz-range-track",
      "-ms-track"
    ];

    this.styleSheet.innerHTML = "";
    for (var i = 0; i < prefixes.length; i++) {
      this.styleSheet.innerHTML +=
        ".activity-input-container input::" +
        prefixes[i] +
        `{background: linear-gradient(to right, blue ${percentage}%, rgba(0,0,0,0.3) ${percentage}%)}`;
    }

    //now updating ticks colour
    for (let i = 1; i <= this.activityLevels.length; i++) {
      let currTick = document.querySelector(`.tick${i}`);

      if (i <= currPosition && !currTick.classList.contains("above-or-equal"))
        currTick.classList.add("above-or-equal");
      else if (
        i > currPosition &&
        currTick.classList.contains("above-or-equal")
      )
        currTick.classList.remove("above-or-equal");

      currTick.classList.remove("current-tick");
      if (i == currPosition) currTick.classList.add("current-tick");
    }

    //updating info text
    const info = document.querySelector(".activity-info");

    info.textContent = this.activityLevels[currPosition - 1].desc;
  }

  render() {
    let ticks = new Array(this.activityLevels.length)
      .fill(null)
      .map((x, idx) => {
        return (
          <div
            className={`activity-tick tick${idx + 1}`}
            key={`activityTick${idx + 1}`}
          />
        );
      });

    return (
      <div className="activity-container">
        <label>Activity Estimate</label>
        <div className="activity-input-container">
          <Field
            name="activity estimate"
            component="input"
            type="range"
            min="1"
            max={this.activityLevels.length}
            onChange={e => this.onChange(e)}
          />
          <div className="activity-ticks-container">{ticks}</div>
        </div>

        <div className="activity-info" />
      </div>
    );
  }
}

export default ActivityEstimate;

//need to make the default slider transparent and we will show where the user is via lighting up the ticks.
//we can give the active tick a class that will make it bigger and also have an arrow down to point to the text
