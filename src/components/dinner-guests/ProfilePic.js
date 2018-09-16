import React from "react";

import "../../css/dinnerGuests/ProfilePic.css";

const ProfilePic = props => {
  const { user } = props;
  const { background, name } = user;
  return (
    <div className="profile-pic">
      <div style={{ background }} />
      <h5>{name}</h5>
    </div>
  );
};

export default ProfilePic;
