import React, { Component } from "react";

import DownArrow from "../DownArrow";
import SpinningCard from "../SpinningCard";

import "../../css/HowDoesItWork.css";

class HowItWorks extends Component {
  render() {
    let data = [
      {
        title: "Your profile",
        backgound: "",
        details: "Add your profile and fully customise it if you wish!"
      },
      {
        title: "We do some Calculations",
        background: "",
        details:
          "Using your profile details we calculate the optimum vitamin, nutrient and mineral levels per day, using the most relevant, up-to-date formulae."
      },
      {
        title: "What are you feeling?",
        background: "",
        details:
          "Tell us what dish or ingredient you want to have in your meal. Or alternatively let us pick something for you!"
      },
      {
        title: "Recipe's everywhere!",
        background: "",
        details:
          "We'll show you our collection of recipes and adjust the ingredient amounts to match your dinner party. Now it's time to cook!"
      }
    ];

    let cards = data.map((x, idx) => {
      const { title, background, details } = x;
      return (
        <SpinningCard
          title={title}
          number={idx + 1}
          background={background}
          details={details}
        />
      );
    });

    return (
      <section className="how-it-works">
        <h2>How it Works</h2>
        <div className="card-container">{cards}</div>
        <div>
          <DownArrow goesTo={"get-started"} />
        </div>
      </section>
    );
  }
}

export default HowItWorks;
