//this HOC will take in a component as props, and render it within a div that takes up only a little bit of the
//page. the outside of the popup will be slightly blurred and when clicked will remove the popup.

//waht we need

//overall div covering the whole of the page opacity ~0.3.
//smaller div that is centered and will render whatever component we pass into it.
//click event listener on bigger div.

//i believe this is the correct syntax for the HOC to work. needs testing.

//the double arrow function basically is short for us returning a stateless functional component.
//we could remove the second arrow function and instead just return a class.

//need to be careful with the opacity of the outer div affecting that of the inner div.

import React from "react";

import "../css/popup.css";

const withPopup = wrappedComponent => props => {
  return (
    <div className="outer-popup">
      <div className="inner-popup">
        <wrappedComponent {...props} />
      </div>
    </div>
  );
};

export default withPopup;
