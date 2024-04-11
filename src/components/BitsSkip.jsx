import React from "react";
import "./popcard.css";

const BitsSkip = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>BITS SKIP</h1>
      <p>
        Level 1: Players take turns throwing a ping pong ball into their
        opponent's soda-filled cups arranged in a triangle. The opponent drinks
        the soda if the ball lands in their cup first.
        <br />
        Level 2: Winners from Level 1 face new challenges, like standing
        opposite each other or encountering mysterious drinks. Landing in a
        soda-filled cup makes the opponent drink, while mysterious drinks affect
        the teammate. Players must eliminate all opponents’ cups to win.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>2 players per team</li>
        <li>Players take turns throwing the ping pong ball</li>
        <li>
          If a player successfully lands a ball in their opponent's cup, the
          opponent must drink the soda from that cup.
        </li>
        <li>
          If a ball bounces out of a cup, it does not count as a successful
          throw.
        </li>
        <li>
          If a player spills soda or disrupts the cups during their opponent's
          turn, they may face penalties such as forfeiting their next turn.
        </li>
        <li>
          In level 2, additional challenges or obstacles may be introduced to
          increase difficulty and excitement.
        </li>
      </ul>
      <h3>Prizes</h3>
      <p>Prize money is awarded for the winner and runner up only.</p>
    </div>
  );
};

export default BitsSkip;
