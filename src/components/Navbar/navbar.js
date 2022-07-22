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
            <NavLink
              to="/"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              About
            </NavLink>
            <NavLink
              to="technologies"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Technologies
            </NavLink>
            <NavLink
              to="projects"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              Projects
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
