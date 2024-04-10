import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/arrow.png";
import Sparkathon from "./components/Sparkathon";
import CodeRewind from "./components/CodeRewind";
import CybercryptQuest from "./components/CybercryptQuest";
import FusionChemist from "./components/FusionChemist";
import GameDevelopment from "./components/GameDevelopment";
import MelodyMatrix from "./components/MelodyMatrix";
import QuizPong from "./components/QuizPong";
import Techstar_5 from "./components/Techstar_5";

const App = () => {
  const [showPopCard, setShowPopCard] = useState(false);
  const [selectedPopCard, setSelectedPopCard] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopCard();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopCard = (selectedComponent) => {
    setSelectedPopCard(selectedComponent);
    setShowPopCard(true);
  };

  const closePopCard = () => {
    setSelectedPopCard(null);
    setShowPopCard(false);
  };

  const handleWheel = (event) => {
    const econt = event.currentTarget;
    econt.scrollLeft += event.deltaY;
  };

  const disablePageScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enablePageScroll = () => {
    document.body.style.overflow = "";
  };

  return (
    <div className="App">
      {/* <Homes /> */}
      <div className="bd1"></div>
      <div className="bd2"></div>
      <div className="bd3"></div>
      <Navbar />
      <h1 className="symp24">SYMPOSIUM&apos;24</h1>
      <div className="mid-hero">
        <p className="welcome-text">
          Welcome to the most awaited symposium event conducted by Hindustan
          University
        </p>
        <a href="https://bit.ly/eluminate24" class="register" target="_blank">
          Register
        </a>
      </div>

      <div className="picsarea">
        <div id="b1"></div>
        <div className="i1">
          <div id="b2"></div>
          <div id="b3"></div>
        </div>
        <div className="i2">
          <div id="b4"></div>
          <div id="b5"></div>
        </div>
      </div>
      <div className="events-head">
        <h1 className="event">EVENTS</h1>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
      <div className="econt" onWheel={handleWheel}>
        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>SPARKATHON</h1>
          <p className="desc">
            Ideathon focused on building innovative solutions for provided
            problem statements. Problem statements will be provided at the
            venue.
          </p>
          <button
            className="more"
            onClick={() => togglePopCard(<Sparkathon onClose={closePopCard} />)}
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>CODE REWIND</h1>
          <p className="desc">
            Reverse Coding challenge where participants predict the output for
            provided reverse-coded snippets. Open for individual participation
            with three levels of increasing difficulty
          </p>
          <button
            className="more"
            onClick={() => togglePopCard(<CodeRewind onClose={closePopCard} />)}
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>CYBERCRYPT QUEST</h1>
          <p className="desc">
            Teams gather at a starting point to receive clues, such as riddles,
            puzzles, or maps, leading them to a hidden treasure within a
            designated area. The treasure's location is accessible and safe, and
            teams have a set time limit to find the treasure to qualify for
            prizes. Rules
          </p>
          <button
            className="more"
            onClick={() =>
              togglePopCard(<CybercryptQuest onClose={closePopCard} />)
            }
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>FUSION CHEMIST</h1>
          <p className="desc">
            Team event requiring two members per team. Participants will code a
            solution for a given problem statement, with teammates swapping
            roles midway. Two levels of increasing difficulty
          </p>
          <button
            className="more"
            onClick={() =>
              togglePopCard(<FusionChemist onClose={closePopCard} />)
            }
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>GAME DEVELOPMENT</h1>
          <p className="desc">
            Team-based event where teams of three create innovative games.
            Create an original game showcasing innovative mechanics and
            compelling storytelling.
          </p>
          <button
            className="more"
            onClick={() =>
              togglePopCard(<GameDevelopment onClose={closePopCard} />)
            }
          >
            More Details
          </button>
        </div>
        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>MELODY MATRIX</h1>
          <p className="desc">
            Level 1: Two players compete to identify and recite the next line of
            a randomly played song after it's paused, earning points for correct
            answers.
            <br />
            <br />
            Level 2: Winners from Level 1 identify songs based on their tunes
            and buzz in to name the song, earning points for correct
            identifications.
          </p>
          <button
            className="more"
            onClick={() =>
              togglePopCard(<MelodyMatrix onClose={closePopCard} />)
            }
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>QUIZ PONG</h1>
          <p className="desc">
            Level 1: Players take turns throwing a ping pong ball into their
            opponent's soda-filled cups arranged in a triangle. The opponent
            drinks the soda if the ball lands in their cup first.
            <br />
            <br />
            Level 2: Winners from Level 1 face new challenges, like standing
            opposite each other or encountering myst ...
            <br />
          </p>
          <button
            className="more"
            onClick={() => togglePopCard(<QuizPong onClose={closePopCard} />)}
          >
            More Details
          </button>
        </div>

        <div
          className="e"
          ref={popupRef}
          onMouseEnter={disablePageScroll}
          onMouseLeave={enablePageScroll}
        >
          <h1>TECHSTAR_5</h1>
          <p className="desc">
            Fame for 5 is a game designed to simulate the experience of being a
            celebrity for a brief period. The objective is to accumulate as much
            "fame" as possible within a five-minute time frame.They can showcase
            their talent through roast battle, stand up comedy, dance, singing,
            mimicry, mime,painting or any similar fine arts.
          </p>
          <button
            className="more"
            onClick={() => togglePopCard(<Techstar_5 onClose={closePopCard} />)}
          >
            More Details
          </button>
        </div>
      </div>

      {selectedPopCard && (
        <div className="pop-card-overlay">
          <div className="pop-card">
            <button className="close-btn" onClick={closePopCard}>
              X
            </button>
            {selectedPopCard}
          </div>
        </div>
      )}
      <div className="foot">Made by Hindustan University</div>
    </div>
  );
};

export default App;
