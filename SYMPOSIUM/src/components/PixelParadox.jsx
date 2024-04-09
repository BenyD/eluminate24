import React from "react";
import "./popcard.css";

const PixelParadox = ({ onClose }) => {
  return (
    <div className="popcard">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h1>PIXEL PARADOX</h1>
      <p>
        Reverse Prompt Image challenge where participants generate prompts for
        provided images. Three levels of increasing difficulty.
      </p>
      <h3>Rules</h3>
      <ul>
        <li>Maximum Teams of two members are allowed</li>
        <li>
          Participants must provide the most relevant prompt for the given
          image.
        </li>
        <li>Each level will have a set number of images and time limit.</li>
        <li>Prompts must be original and related to the provided image.</li>
        <li>Any Malpractice lead to team disqualification.</li>
        <li>No Electronic devices will be allowed at the venue.</li>
      </ul>
      <h3>Judging Criteria</h3>
      <p>
        <ul>
          <li>Relevance and creativity of the prompt.</li>
          <li>Clarity and specificity of the generated prompt.</li>
          <li>Originality and uniqueness.</li>
          <li>
            The generated image with more relavant to provided image will be
            rewarded more points
          </li>
        </ul>
      </p>
      <h3>Prizes</h3>
      <p>Winners and runners-up awarded for each level.</p>
    </div>
  );
};

export default PixelParadox;
