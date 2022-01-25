import React from "react";
import './App.css';
import Home from './components/void/home';
import Nav from './components/void/nav';
import SectionTwo from './components/void/section-two';
// import Void from './components/void/void';



function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <SectionTwo />
    </div>
  );
}

export default App;
