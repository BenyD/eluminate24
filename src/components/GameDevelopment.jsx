import React from "react";
import "./popcard.css";

const GameDevelopment = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>DIGITAL DESIGNER</h1>
      <p>
        Our combined Game Development and App Development event provides a
        platform for participants to showcase their creativity and technical
        skills in designing and developing innovative games and applications
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Maximum Teams of three members are allowed.</li>
        <li>Games must be original creations developed during the event.</li>
        <li>
          Each team will have a designated time frame for game development.
        </li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Gameplay mechanics and user experience.</li>
          <li>Innovation and creativity in game design.</li>
          <li>Technical implementation and stability</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Winners and runners-up awarded based on the jury's decision</p>
    </div>
  );
};

export default GameDevelopment;
