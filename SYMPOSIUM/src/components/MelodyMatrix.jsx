import React from "react";
import "./popcard.css";

const MelodyMatrix = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>MELODY MATRIX</h1>
      <p>
        Level 1: Two players compete to identify and recite the next line of a
        randomly played song after it&apos;s paused, earning points for correct
        answers.
        <br />
        Level 2: Winners from Level 1 identify songs based on their tunes and
        buzz in to name the song, earning points for correct identifications.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Participation is individual; no team entries are allowed.</li>
        <li>
          The player who presses the buzzer first receives priority to answer.
        </li>
        <li>Each game consists of a total of 5 songs.</li>
        <li>
          If a player fails to complete the lyrics or recognize the tune, their
          opponent gets a chance to answer.
        </li>
        <li>
          If both players fail to answer, no points are awarded for that round.
        </li>
        <li>
          Only winners from level 1 are eligible to participate in level 2.
        </li>
        <li>
          Use of earphones/smartphones is strictly prohibited during the game.
        </li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Accuracy and speed of response</li>
          <li>Fair play and sportsmanship</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Prize money is awarded for the winner and runner up only</p>
    </div>
  );
};

export default MelodyMatrix;
