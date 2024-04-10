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
        Valorant is a team-based tactical shooter where players select agents
        with unique abilities to complete in objective-based matches. Team
        alternate between attacking and defending rounds, aiming to plant or
        defuse a spike (bomb) while utilising precise gunplay and agent
        abilities. o BGMI survival shooter game, a type of large-scale last man
        standing deathmatch.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>
          A team should consist only 4 members(BGMI) and 5 members(Valorant)
        </li>
        <li>
          All registered participants and teams are requested to join the room
          before 15mins.
        </li>
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
