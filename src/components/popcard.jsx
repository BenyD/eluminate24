import React from "react";
import "./popcard.css";

const Popcard = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>Title</h1>
      <p>Description</p>
      <h3>Rules</h3>
      <ul>
        <li>Rules 1</li>
        <li>Rules 2</li>
        <li>Rules 3</li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Criteria 1</li>
          <li>Criteria 2</li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Prizes</p>
    </div>
  );
};

export default Popcard;
