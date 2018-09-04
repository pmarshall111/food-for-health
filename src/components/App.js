import React, { Component } from "react";

import UserVitals from "./UserVitals";

import Switcher from "./Switcher";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switcher
          options={[
            {
              desc: "Sign up",
              onClick: () => {}
            },
            {
              desc: "Log in",
              onClick: () => {}
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
