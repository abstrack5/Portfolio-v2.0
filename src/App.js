import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/navbar";
import Homepage from "./components/Home/home";
import About from "./components/About/about";
import Technologies from "./components/Technologies/technology";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='about' element={<About />} />
        <Route path='technologies' element={<Technologies />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
