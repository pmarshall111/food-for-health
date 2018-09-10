import React, {Component, Fragment} from "react";

import Title from "./welcome-page/Title";
import Form from "./welcome-page/Form";


class WelcomePage extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <section style={{height: "1000px", width: "100%", background: "purple"}} />
        <section style={{height: "1000px", width: "100%", background: "green"}} />
        <Form />
      </Fragment>
    );
  }
}

export default WelcomePage;
