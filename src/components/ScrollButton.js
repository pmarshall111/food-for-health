import React, { Component } from "react";

//needs to change direction on click, plus also change the amount of scroll

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    let { scrollDown } = this.props;

    this.state = {
      scrollDown
    };
  }

  btnClicked() {
    //in here we will add or remove classes with animations to turn the arrow from pointing down
    //to pointing up and vice versa

    //also will go and scroll the page.

    this.setState({ scrollDown: !this.state.scrollDown });
  }

  render() {
    //right now we will just return a block;
    return <div onClick={this.btnClicked} />;
  }
}

export default ScrollButton;
