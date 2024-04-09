import React from "react";
import "./popcard.css";

const Techstar_5 = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>TECHSTAR 5</h1>
      <p>
        Fame for 5 is a game designed to simulate the experience of being a
        celebrity for a brief period. The objective is to accumulate as much
        &quot;fame&quot; as possible within a five-minute time frame.They can
        showcase their talent through roast battle, stand up comedy, dance,
        singing, mimicry, mime,painting or any similar fine arts.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Max 2 people in a team.</li>
        <li>
          Each player receives a score based on their performance, creativity,
          and engagement during the game.
        </li>
        <li>
          Players must adhere to a code of conduct, maintaining respect and
          sportsmanship towards others at all times.
        </li>
        <li>
          The game is intended for entertainment purposes only and should not be
          taken too seriously.
        </li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>
            Each player receives a score based on their performance, creativity,
            and engagement during the game.
          </li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Prize money is awarded for the winner and runner up only.</p>
    </div>
  );
};

export default Techstar_5;
