import React from "react";
import "../styles.css";
import Clock from "./Clock";

const ClockUI = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Digital Clock</h1>
          <Clock />
        </div>
      </div>
    </>
  );
};

export default ClockUI;
