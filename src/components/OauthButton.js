import React from "react";

const OauthButton = props => {
  const { logo, company } = props;

  return (
    <div className="auth-btn google-btn">
      <div className="auth-icon-wrapper">
        <img className="auth-icon-svg" src={logo} />
      </div>
      <p className="btn-text">
        <b>Sign in with {company}</b>
      </p>
    </div>
  );
};

export default OauthButton;
