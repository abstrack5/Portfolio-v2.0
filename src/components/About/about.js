import React from "react";
import "./about.css";
import profilePic from "../../images/profilePic.jpeg";
// import background from "../../images/background.jpg";

function About() {
  return (
    <main className="home-container background">
      <div>
        <p className="welcomeMsg">Hey!</p>
        <p className="welcomeMsg">I'm Armon</p>
      </div>
          <img src={profilePic} alt="profile" className="profile-img"/>
    </main>
  );
}

export default About;
