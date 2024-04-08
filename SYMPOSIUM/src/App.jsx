import React from "react";
// import logo from "./assets/hits.png";
import Navbar from "./components/Navbar";
import Homes from "./Homes";
import arrow from "./assets/arrow.png";
import b1 from "./assets/jb.jpeg";

const App = () => {
  return (
    <div className="App">
      {/* <Homes /> */}
      <div className="bd1"></div>
      <div className="bd2"></div>
      <Navbar />
      <h1 className="symp24">SYMPOSIUM'24</h1>
      <div className="mid-hero">
        <p className="welcome-text">
          Welcome to the most awaited symposium event conducted by Hindustan
          University
        </p>
        <button className="register">Register</button>
      </div>

      <div class="picsarea">
        <div id="b1"></div>
        <div className="i1">
          <div id="b2"></div>
          <div id="b3"></div>
        </div>
        <div className="i2">
          <div id="b4"></div>
          <div id="b5"></div>
        </div>
      </div>
      <div className="events-head">
        <h1 className="event">EVENTS</h1>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </div>
  );
};

export default App;
