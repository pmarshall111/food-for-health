import React, { Component } from "react";

// import Navbar from "./Navbar";
import CustomNavbar from "./CustomNavbar";
import WelcomePage from "./WelcomePage"
import PageSection from "./PageSection";

import withLimitedWidth from "../hoc/withLimitedWidth";

class App extends Component {
  render() {
    // return (
    //   <div style={{ width: "100%", height: "4000px", background: "#999" }}>
    //     <div style={{ position: "fixed", top: "50%", left: "50%" }}>
    //       <PageSection />
    //     </div>
    //   </div>
    // );

    const LimitedWelcome = withLimitedWidth(WelcomePage)


    return (
      <div className="App">
        <CustomNavbar
          title="Food for Health"
          menuItems={[
            { desc: "Home" },
            { desc: "Dinner Guests" },
            { desc: "Favourite Recipes" },
            { desc: "Recipe Search" }
          ]}
          endItems={[{ desc: "Log out" }]}
        />
        <LimitedWelcome />
      </div>
    );
  }
}

export default App;

// <WelcomeFormArea />

// <Navbar
//   linksCenter={{
//     links: [
//       {
//         desc: "Food for Health",
//         onClick: () => {},
//         title: true
//       }
//     ],
//     smallMenu: false
//   }}
//   linksRight={{
//     links: [
//       {
//         desc: "Login",
//         onClick: () => {}
//       },
//       {
//         desc: "Continue as guest",
//         onClick: () => {}
//       }
//     ],
//     smallMenu: true
//   }}
// />
