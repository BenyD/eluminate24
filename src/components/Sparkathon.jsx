import React from "react";
import "./popcard.css";

const Sparkathon = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>SPARKATHON</h1>
      <p>
        Ideathon focused on building innovative solutions for provided problem
        statements. Problem statements will be provided at the venue
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Maxiumum teams of three members each are allowed.</li>
        <li>Each team must adhere to the given problem statement.</li>
        <li>All ideas must be original and developed during the event.</li>
        <li>
          Teams must present their ideas within the designated time limit.
        </li>
        <li>
          Students can make use of their laptops for idea formation and research
          work
        </li>
      </ul>
      <p>
        Judging Criteria
        <ul>
          <li>Creativity and uniqueness of the idea.</li>
          <li>Feasibility and practicality of implementation.</li>
          <li>Quality of presentation and communication skills</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>
        Winners and runners-up will be awarded based on the jury's decision.
      </p>
    </div>
  );
};

export default Sparkathon;
