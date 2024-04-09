import React from "react";
import "./popcard.css";

const GamerConvention = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>GAMER CONVENTION</h1>
      <p>
        It(Valorant) is a team-based tactical shooter where players select
        agents with unique abilities to compete in objective based matches.
        Teams alternate between attacking and defending rounds, aiming to plant
        or defuse a Spike (bomb) while utilizing precise gunplay and agent
        abilities.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>A team should consist only 5 members.</li>
        <li>All participants are requested to join the room before 15mins.</li>
        <li>Only registered teams and squads are allowed to play.</li>
        <li>
          Any types of mods or hacks usage will lead to team’s disqualification
        </li>
        <li>
          Management is not responsible for any type of in-game glitch or ping
          issues.
        </li>
        <li>E-certificates will be provided to all the participants.</li>
        <li>.Winners will be awarded with cash prices and certificate.</li>
      </ul>
      <h3>Entry Fee</h3>
      <p>50/- per participant</p>
      <h3>Prizes</h3>
      <p>Winners and runners-up awarded based on the jury's decision</p>
    </div>
  );
};

export default GamerConvention;
