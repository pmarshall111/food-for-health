import React, {Component} from "react";

import "../css/withLimitedWidth.css";

const withLimitedWidth = (WrappedComponent) => props => {
      return (
        <div className="width-limit">
        <WrappedComponent />
        </div>
      );
};

export default withLimitedWidth;
