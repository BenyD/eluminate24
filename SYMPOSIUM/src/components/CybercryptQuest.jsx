import React from "react";
import "./popcard.css";

const CyberCryptQuest = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>CYBER CRYPT QUEST</h1>
      <p>
        Teams gather at a starting point to receive clues, such as riddles,
        puzzles, or maps, leading them to a hidden treasure within a designated
        area. The treasure's location is accessible and safe, and teams have a
        set time limit to find the treasure to qualify for prizes.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>A team consisting of 3 players each.</li>
        <li>
          Teams must follow the designated route and clues provided by the
          organizers.
        </li>
        <li>Cheating or any form of unfair play is strictly prohibited.</li>
        <li>
          Teams must solve each clue in the correct sequence to progress through
          the hunt.
        </li>
        <li>Skipping clues or jumping ahead is not allowed.</li>
        <li>
          Once a team locates the treasure, they must follow instructions for
          retrieval provided by the organizers.
        </li>
        <li>
          Organizer's decisions regarding rules interpretation, scoring, or
          disqualification are final.
        </li>
      </ul>
      <h3>Prizes</h3>
      <p>Prize money is awarded for the winner and runner up only</p>
    </div>
  );
};

export default CyberCryptQuest;
