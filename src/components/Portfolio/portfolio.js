import React from "react";
import "./portfolio.css";
import project1 from "../../images/coffee-br.png";
import project2 from "../../images/GüdEats-app-screenshot.jpeg";
import project3 from "../../images/weatherApp.png";
import project4 from "../../images/run-buddy-snap.jpeg";

const Portfolio = () => {
  return (
    <div className="container-fluid background pt-5">
      <div className="welcomeMsg text-center">
        <h1>Portfolio</h1>
      </div>
      <div className="row pl-5">
        <div className=" col-6">
          <a href="https://github.com/">
            <img src={project1} className="port-img mb-2" alt='' />
          </a>
        </div>
        <div className="col-6">
          <a href="https://github.com/">
            <img src={project2} className="port-img mb-2 project-two" alt=''  />
          </a>
        </div>
        <div className="col-6">
          <a href="https://github.com/">
            <img src={project3} className="port-img project-three" alt=''  />
          </a>
        </div>
        <div className="col-6">
          <a href="https://github.com/">
            <img src={project4} className="port-img" alt=''  />
          </a>
        </div> as 
      </div>
    </div>
  );
};
export default Portfolio;
