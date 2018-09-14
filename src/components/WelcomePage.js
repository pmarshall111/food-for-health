import React, { Component, Fragment } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Title from "./welcome-page/TitlePage";
import WhatIsIt from "./welcome-page/WhatIsIt";
import HowItWorks from "./welcome-page/HowDoesItWork";
import Form from "./welcome-page/Form";

class WelcomePage extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Element name="what-is-it">
          <WhatIsIt />
        </Element>
        <Element name="how-does-it-work">
          <HowItWorks />
        </Element>
        <Element name="get-started">
          <Form />
        </Element>
      </Fragment>
    );
  }
}

export default WelcomePage;
