import React, { Component } from "react";

import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";

import "../css/CustomNavbar.css";

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.addRemoveNav);
    this.addRemoveNav();
  }

  addRemoveNav() {
    let scrollAmount =
      document.body.scrollTop || document.documentElement.scrollTop;

    let navContainer = document.querySelector(".nav-container");
    let titlePage = document.querySelector(".title-page");
    if (!titlePage)
      return navContainer.classList.remove("on-title", "homepage");

    let { height } = titlePage.getBoundingClientRect();

    if (scrollAmount > 3 * height / 4)
      navContainer.classList.remove("on-title");
    else if (!navContainer.classList.contains("on-title"))
      navContainer.classList.add("on-title");
  }

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
      <div className="nav-container on-title homepage">
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
