import React from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import "../css/DownArrow.css";

const DownArrow = props => {
  return (
    <div
      className="down-arrow-container"
      onClick={() => scroller.scrollTo(props.goesTo, { smooth: true })}
    >
      <div className="square" />
      <div className="arr-container">
        <div className="arr-left arr" />
        <div className="arr-right arr" />
      </div>
    </div>
  );
};

export default DownArrow;
