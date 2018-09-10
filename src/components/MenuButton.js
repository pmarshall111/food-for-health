import React from "react";

import "../css/MenuButton.css";

const MenuButton = props => {
  const { onClick } = props;
  return (
    <div
      className="menu-link"
      onClick={function(e) {
        document.querySelector(".menu-link").classList.toggle("close");
        onClick(e);
      }}
    >
      Menu
    </div>
  );
};

export default MenuButton;
