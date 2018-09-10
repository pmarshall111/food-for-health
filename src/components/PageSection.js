import React, { Component, Fragment } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "../css/PageSection.css";

class PageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: []
    }
  }
  getSectionPositions() {
    const { parentDiv, labels } = this.props;
    console.log(parentDiv)

    console.log(document.querySelector(".App"), document.querySelector("body"))

    let allSections = Array.from(document.querySelectorAll(`${parentDiv} > section`));

    let bodyPos = document.body.getBoundingClientRect().top;

    console.log(allSections)

    let positions = allSections
      .map((section, idx) => {
        let { top, bottom } = section.getBoundingClientRect();
        console.log({top, bottom, bodyPos})

        top -= bodyPos; bottom -= bodyPos

        return { min: Math.floor(top),max: Math.floor(bottom), label: labels[idx] };
      })

      console.log(positions)

      this.setState({positions}, () => this.showLabel())
  }

  componentDidMount() {
    console.log("calling mount");

    this.getSectionPositions()

    window.addEventListener("scroll", () => this.showLabel());
  }

  showLabel() {
    const {positions} = this.state
    let scrollAmount =
    document.body.scrollTop || document.documentElement.scrollTop;

    let positionLabels = document.querySelectorAll(".label-container");

    // console.log(positions)

    positions.forEach((section, idx) => {
      let label = positionLabels[idx];
      let { min, max } = section;
      // console.log({min, max, scrollAmount})
      if (scrollAmount >= min && scrollAmount < max)
      label.classList.remove("hidden");
      else if (!label.classList.contains("hidden"))
      label.classList.add("hidden");
    });
  };

  render() {
    // this.getSectionPositions();
    // let positions = [
    //   { min: 0, max: 1000, label: "title" },
    //   { min: 1000, max: 1500, label: "sec 1" },
    //   { min: 1500, max: 2500, label: "penultimate seciton" },
    //   { min: 2500, max: Infinity, label: "ending section" }
    // ];
    // this.positions = positions;

    const {positions} = this.state

    console.log(positions)

    let circlesAndLabels = positions.map(x => {
      return (
        <Fragment>
          <div className="hover" onClick={() => scroll.scrollTo(x.min+5)}>
            <div className="circle" />
          </div>
          <div className="label-container hidden">
            <label>{x.label}</label>
          </div>
        </Fragment>
      );
    });

    return (
      <div className="circles-container">
        {circlesAndLabels}
        <div className="cont-background" />
      </div>
    );
  }
}

export default PageSection;
