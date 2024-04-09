import React from "react";
import "./popcard.css";

const FusionChemist = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>FUSION CHEMIST</h1>
      <p>
        Team event requiring two members per team. Participants will code a
        solution for a given problem statement, with teammates swapping roles
        midway. Two levels of increasing difficulty
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Teams must consist of two members.</li>
        <li>
          Participants must swap roles at the designated time during the event.
        </li>
        <li>The solution must be submitted within the given time frame.</li>
        <li>Any Malpractice lead to team disqualification.</li>
        <li>No Electronic devices will be allowed at the venue.</li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Effectiveness and efficiency of the solution.</li>
          <li>Smooth transition during role swapping.</li>
          <li>Code quality and readability.</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Winners and runners-up awarded for each level.</p>
    </div>
  );
};

export default FusionChemist;
