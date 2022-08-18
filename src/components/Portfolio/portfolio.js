import React from "react";
import "./portfolio.css";

import project1 from "../../images/lastProject.PNG";
import project2 from "../../images/coffee-br.png";
import project3 from "../../images/GüdEats-app-screenshot.jpeg";
import project4 from "../../images/weatherApp.png";

const Portfolio = () => {
  return (
    <div className="container-fluid background pt-5">
      <div className="welcomeMsg text-center">
        <h1>Portfolio</h1>
      </div>
      <div className="row pl-5">
        <div className=" col-6">
          <a href="https://radiant-thicket-52137.herokuapp.com/">
            <img src={project1} className="port-img mb-2" alt='' />
          </a>
        </div>
        <div className="col-6">
          <a href="https://limitless-everglades-24758.herokuapp.com/">
            <img src={project2} className="port-img mb-2 project-two" alt=''  />
          </a>
        </div>
        <div className="col-6">
          <a href="https://miscmich.github.io/congenial-engine/">
            <img src={project3} className="port-img project-three" alt=''  />
          </a>
        </div>
        <div className="col-6">
          <a href="https://abstrack5.github.io/Genius-Weather/">
            <img src={project4} className="port-img" alt=''  />
          </a>
        </div> as 
      </div>
    </div>
  );
};
export default Portfolio;
