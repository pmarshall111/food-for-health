import React, { Component } from "react";

import "../css/SpinningCard.css";

const SpinningCard = props => {
  const { number, title, background, details } = props;
  return (
    <div className="scene">
      <div className="shape card">
        <div className="face ft">
          <div className="circle">
            <h5>{number}</h5>
          </div>
        </div>
        <div className="face bk">
          <div className="circle">
            <h5>{number}</h5>
          </div>
          <h3>{title}</h3>
          <img style={{ background }} />
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SpinningCard;
