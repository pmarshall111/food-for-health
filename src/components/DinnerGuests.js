import React, { Component } from "react";

import ProfilePic from "./dinner-guests/ProfilePic";

import "../css/DinnerGuests.css";

class DinnerGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Peter (you)",
          kCal: 3207,
          picture: "",
          vitaminsNeeded: ["Vit B", "Vit C"],
          bodyFunctionsToImprove: ["Circulation"]
        },
        {
          name: "Toby",
          kCal: 1000,
          picture: "",
          vitaminsNeeded: [],
          bodyFunctionsToImprove: []
        }
      ],
      currUserIdx: 0
    };

    this.changeCurrUser = this.changeCurrUser.bind(this);
  }

  changeCurrUser(e) {
    let user = e.target;
    //get the user index from here
    let idx = 0;

    this.setState({ currUserIdx: idx });
  }

  render() {
    const { users, currUserIdx } = this.state;
    const dinnerGuests = users.map((x, idx) => {
      return (
        <ProfilePic
          user={x}
          selected={idx == currUserIdx}
          onClick={this.changeCurrUser}
        />
      );
    });

    return (
      <section className="dinner-guests">
        <div>
          <h2>Dinner Guests</h2>
          <p>Add the people you'll be eating with!</p>
        </div>
        <div>
          <h3>Current Dinner Guests</h3>
          {dinnerGuests}
        </div>
      </section>
    );
  }
}

export default DinnerGuests;
