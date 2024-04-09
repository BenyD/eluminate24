import React, { useState } from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/arrow.png";
import Popcard from "./components/popcard";
import Sparkathon from "./components/Sparkathon";

const App = () => {
  const [showPopCard, setShowPopCard] = useState(false);
  const togglePopCard = () => {
    setShowPopCard(!showPopCard);
  };
  const closePopCard = () => {
    setShowPopCard(false);
  };
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
      <div className="econt">
        <div className="e">
          <h1>SPARKATHON</h1>
          <p className="desc">
            Ideathon focused on building innovative solutions for provided
            problem statements. Problem statements will be provided at the
            venue.
          </p>
          <button className="more" onClick={togglePopCard}>
            More Details
          </button>
        </div>
      </div>
      {showPopCard && <Sparkathon onClose={closePopCard} />}
    </div>
  );
};

export default App;
