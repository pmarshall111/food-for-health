import React, { Component } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import DownArrow from "../DownArrow";

import "../../css/TitlePage.css";

class TitlePage extends Component {
  render() {
    return (
      <section className="title-page">
        <h1>Food for Health</h1>
        <h2>
          The app that can help you to get the vitamins and minerals that you
          need to live a healthy and happy life
        </h2>
        <img src="https://i.ytimg.com/vi/yOlyrmM0GGA/maxresdefault.jpg" />
        <div className="links">
          <div>
            <Link to="what-is-it" smooth={true}>
              <h4>What is it?</h4>
            </Link>
            <Link to="how-does-it-work" smooth={true}>
              <h4>How does it work?</h4>
            </Link>
            <Link to="get-started" smooth={true}>
              <h4>Get started!</h4>
            </Link>
          </div>
          <DownArrow goesTo="what-is-it" />
        </div>
      </section>
    );
  }
}

export default TitlePage;
