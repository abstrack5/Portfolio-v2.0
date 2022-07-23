import React from "react";
import './navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container className="justify-content-center">
          <Nav className="nav-font nav-tabs">
            {/* <NavLink
              to="/"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Home
            </NavLink> */}
            <NavLink
              to="/"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              About
            </NavLink>
            <NavLink
              to="portfolio"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="resume"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="contact"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
