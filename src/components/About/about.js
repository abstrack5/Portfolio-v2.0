import React from "react";
import "./about.css";
import profilePic from "../../images/profilePic.jpeg";
// import background from "../../images/background.jpg";

function About() {
  return (
    <main className="home-container background row">
      <div className="col-4 mt-5 pt-5">
        <h1 className="welcomeMsg">Hey!</h1>
        <h1 className="welcomeMsg">I'm Armon</h1>
      </div>
      <div className="col-3 mt-5 pt-5">
          <img src={profilePic} alt="profile" className="profile-img"/>
      </div>    
      <div className="about-container rounded col-8 mt-5 mb-5">
          <h2 className="about-title "> About me</h2>
          <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at est a elit egestas cursus. Etiam molestie tincidunt metus nec finibus. Mauris suscipit sem id malesuada commodo. Phasellus rutrum, lorem eu sagittis consectetur, neque risus sollicitudin dolor, quis auctor nulla enim ut lacus. Vivamus laoreet pretium nunc, at vehicula velit pulvinar quis. Praesent eu tortor vel augue posuere congue. Curabitur sollicitudin vestibulum dui, quis aliquam sapien. Etiam purus risus, ornare rutrum turpis vel, viverra dictum metus. Integer iaculis ipsum dolor, eu sagittis augue euismod in. </p>
      </div>
    </main>
  );
}

export default About;
