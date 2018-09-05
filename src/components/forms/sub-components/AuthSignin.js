import React from "react";

import OauthButton from "../../OauthButton";

import "../../../css/oauthButtons/generalStyles.css";
import "../../../css/oauthButtons/Google.css";

//idea that instead of each having buttons, we could just have a component that's like a slideshow,
//then the as the user hovers over each icon, it will change a button underneath to be the button for
//whatever logo they're hovering over. need to click to change logo.

const AuthSignin = props => {
  return (
    <div>
      <OauthButton
        logo="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        company="Google"
      />
      <OauthButton
        logo="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
        company="Facebook"
      />
      <OauthButton
        logo="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg"
        company="Twitter"
      />
      <OauthButton
        logo="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        company="GitHub"
      />
    </div>
  );
};

export default AuthSignin;
