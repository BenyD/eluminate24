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
        Hackers, it's time to assemble and embark on an exhilarating journey
        into the world of cybersecurity! Dive into a virtual environment teeming
        with cybersecurity puzzles, vulnerabilities, and hidden flags waiting to
        be discovered. Put your penetration testing skills, reverse engineering
        capabilities, and Open Source Intelligence (OSINT) knowledge to the test
        as you navigate through a series of challenges meticulously designed to
        challenge and enhance your cybersecurity prowess.
      </p>
      <h3>Type</h3>
      <p>The CTF will be conducted in Jeopardy Style format.</p>
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
        <li>
          Finalizing teams will be done offline, each team can have atmost of 3
          participants
        </li>
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
    </div>
  );
};

export default CaptureTheFlag;
