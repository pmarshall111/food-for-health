import React, { Component } from "react";

import "../css/Switcher.css";

class Switcher extends Component {
  changeBackground(e) {
    //get the option index, then just translate the background div over to there

    let index = Array.from(e.target.classList)
      .find(x => x.includes("div&"))
      .match(/div&(\d+)/)[1];

    // console.log(index);

    const background = document.querySelector(
      ".switcher-container .background"
    );

    background.style.left = this.biggestWidth * index + "px";
  }

  componentDidMount() {
    const allOptions = document.querySelectorAll(".option-divs");
    let biggestWidth = -Infinity;

    allOptions.forEach(option => {
      if (option.clientWidth > biggestWidth) biggestWidth = option.clientWidth;
    });
    allOptions.forEach(
      option => (option.style.width = `${biggestWidth + 1}px`)
    );

    const background = document.querySelector(
      ".switcher-container .background"
    );
    background.style.width = `${biggestWidth + 1}px`;

    this.biggestWidth = biggestWidth;
  }

  render() {
    let { options, name } = this.props;

    let optionDivs = options.map((x, idx) => {
      return (
        <div
          key={`${x}${idx} switcher`}
          onClick={e => {
            x.onClick(e);
            this.changeBackground(e);
          }}
          className={`option-divs div&${idx}`}
        >
          {x.desc}
        </div>
      );
    });

    return (
      <div className="switcher-container-non-clash-classname">
        <div className="background" />
        {optionDivs}
      </div>
    );
  }
}

export default Switcher;
