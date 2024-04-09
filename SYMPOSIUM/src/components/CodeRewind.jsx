import React from "react";
import "./popcard.css";

const CodeRewind = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>CODE REWIND</h1>
      <p>
        Reverse Coding challenge where participants predict the output for
        provided reverse-coded snippets. Open for individual participation with
        three levels of increasing difficulty
      </p>
      <h3>Rules</h3>
      <ul>
        <li>
          Participants must correctly predict the output for the given
          reverse-coded snippets.
        </li>
        <li>Each level will have a time limit for submission.</li>
        <li>Participants cannot collaborate with others during the event.</li>
        <li>Any Malpractice lead to team disqualification.</li>
        <li>No Electronic devices will be allowed at the venue.</li>
      </ul>
      <p>
        Judging Criteria
        <ul>
          <li>Accuracy of output prediction.</li>
          <li>Efficiency and correctness of solutions.</li>
          <li>Adherence to coding standards.</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Prizes awarded for each level winner and overall winners.</p>
    </div>
  );
};

export default CodeRewind;
