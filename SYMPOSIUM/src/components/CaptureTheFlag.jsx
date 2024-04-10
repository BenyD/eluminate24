import React from "react";
import "./popcard.css";

const CaptureTheFlag = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>Capture the Flag</h1>
      <p>
        The Capture the Flag (CTF) event will be conducted in Jeopardy Style
        format.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>CTF will take place on TryHackMe platform only.</li>
        <li>
          Participants must submit flags for each challenge through the CTF
          platform in the format: Luminati
        </li>
        <li>
          Points awarded for each challenge will be indicated on the platform,
          with bonus points reward for ‘first blood’ or first participant
          solving each challenge.
        </li>
        <li>Finalizing teams will be done offline, with 1 to 3 members.</li>
        <li>
          Any attempt to disrupt the CTF platform, infrastructure or
          participants, cheating or sharing answers will lead to
          disqualification.
        </li>
        <li>
          Participants must exhibit good sportsmanship and fair play. Any kind
          of disrespect, offensive language or harassment won’t be tolerated.
          The CTF organizers and associated organizations are not liable for any
          actions taken by participants.
        </li>
        <li>
          For any questions, concerns or technical issues, reach us through the
          official WhatsApp group.
        </li>
      </ul>
      <h3>Prizes</h3>
      <p>Prize money is awarded for the winner and runner up only.</p>
    </div>
  );
};

export default CaptureTheFlag;
