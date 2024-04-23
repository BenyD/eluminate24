import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logoe.png";

const Navbar = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-26T08:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo" />
      <div className="timer">
        {days > 0 && (
          <div className="timer-d">
            <h2>{days}</h2>
            <p>Days</p>
          </div>
        )}
        {days > 0 && <h2>:</h2>}
        <div className="timer-d">
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <h2>:</h2>
        <div className="timer-d">
          <h2>{minutes}</h2>
          <p>Minutes</p>
        </div>
        <h2>:</h2>
        <div className="timer-d">
          <h2>{seconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
      {/* <div className="temp">
        <h2>DATES TO BE ANNOUNCED SOON</h2>
      </div> */}
    </div>
  );
};

export default Navbar;
