import React from "react";
import "./home.css";
import profilePic from "../../images/profilePic.jpeg";

function Homepage() {
  return (
    <div className="home-container d-flex">
      <div>
        <h1>Welcome, <br />My name is Armon Ahmadi</h1>
      </div>
      <div>
        <img src={profilePic} alt="profile picture" />
      </div>
    </div>
  );
}

export default Homepage;
