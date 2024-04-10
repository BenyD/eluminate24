import React from "react";
import "./popcard.css";

const TechTalkies = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>TECH TALKIES</h1>
      <p>
        "Tech Talkies" is a competitive event designed to provide students with
        practical interview experience in a simulated environment. Participants
        will engage in mock interviews to showcase their skills and readiness
        for the tech industry.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Eligibility: Open to all Participants.</li>
        <li>
          Interview Format: Each participant will undergo a timed mock interview
          session.
        </li>
        <li>Conduct: Professional behavior is required at all times.</li>
        <li>Registration: Participants must register using QR or Link</li>
        <li>Decisions by the panel of judges are final.</li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Communication Skills</li>
          <li>Technical Knowledge</li>
          <li>Problem-Solving Ability</li>
          <li>Professionalism</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Winners and runners-up awarded based on the jury's decision.</p>
    </div>
  );
};

export default TechTalkies;
