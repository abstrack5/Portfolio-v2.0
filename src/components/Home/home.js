import React from "react";
import "./home.css";
import profilePic from "../../images/profilePic.jpeg";
// import background from "../../images/background.jpg";

function Homepage() {
  return (
    <div className="home-container background">
      <div>
        <h1>Hey!</h1>
        <h1>I'm Armon</h1>
      </div>
      <div>
          <img src={profilePic} alt="profile picture" width='275px' className="profile-img"/>
      </div>
    </div>
  );
}

export default Homepage;
