import React, { Component } from "react";

import DownArrow from "../DownArrow";

import "../../css/WhatIsIt.css";

class WhatIsIt extends Component {
  render() {
    return (
      <section className="what-is-it">
        <div className="img" />
        <div className="info">
          <h2>What is it?</h2>
          <p>
            Food for Health is a new health app that's designed to help you live
            optimally. We all need the right amounts of vitamins and minerals
            for optimal bodily function. With the vast quanities of processed
            food out there these days it can sometimes feel quite hard to know
            where to look. This is where Food for Health comes in. Based on the
            latest and official UK Government Vitamin and Nutrient
            recommendations, we can give you recipes of what you want to eat
            tailored to your needs. This can be trying to up the intakes of
            vitamins you know you're deficient in... or it could be to add extra
            vitamins to those bodily functions you want to maintain. To make
            sure you don't go over your daily recommended allowance, we will
            always inform you if your planned meal comes close to the limit of
            what is deemed safe.
          </p>
          <div>
            <DownArrow goesTo={"how-does-it-work"} />
          </div>
        </div>
      </section>
    );
  }
}

export default WhatIsIt;
