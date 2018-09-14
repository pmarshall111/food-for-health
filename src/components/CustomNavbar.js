import React, { Component } from "react";

import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";

import "../css/CustomNavbar.css";

class Navbar extends Component {
  render() {
    const { menuItems, endItems, title } = this.props;

    let menuItemDivs = <div />,
      endItemDivs = <div />;
    if (menuItems)
      menuItemDivs = menuItems.map(x => {
        return <div className="menu-option">{x.desc}</div>;
      });

    if (endItems)
      endItemDivs = endItems.map(x => {
        return <div className="menu-option">{x.desc}</div>;
      });

    return (
      <div className="nav-container on-title">
        <nav>
          <MenuButton
            onClick={() => {
              document.querySelector(".side-nav").classList.toggle("open");
            }}
          />
          <h1>{title}</h1>
        </nav>
        <div className="sides-container">
          <div className="side-nav">
            <div>{menuItemDivs}</div>
            <div>{endItemDivs}</div>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Navbar;
