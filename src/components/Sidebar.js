import React, { Component } from "react";

import PageSection from "./PageSection"

import "../css/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-info">
          <div
            className="control"
            onClick={() => {
              document
                .querySelector(".sidebar-container")
                .classList.toggle("open");
            }}
          />
          <div className="recipe-btn" />
          <div className="info-btn" />
          <div className="faqs-btn" />
        </div>
        <div className="content" />
        <PageSection parentDiv=".App div" labels={["Title page", "What is it?", "How does it work?", "Get Started"]}/>
      </div>
    );
  }
}

export default Sidebar;
