import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/navbar";
// import Homepage from "./components/About/about";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        {/* <Route path='/' element={<Homepage />} /> */}
        <Route path='/' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
