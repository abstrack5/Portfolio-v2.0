import React from 'react';
import "./App.css";
import NavigationBar from "./components/Navbar/navbar";
import Homepage from "./components/Home/home";

function App() {
  return (
    <div className=''>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
