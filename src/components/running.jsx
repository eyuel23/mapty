import React from "react";
import "./Sidebar.css";

export default function Running(props) {
  const workout = props.workout;
  return (
    <>
      <div className="workout__details">
        <span className="workout__icon">⚡️</span>
        <span className="workout__value">{workout.pace}</span>
        <span className="workout__unit">min/km</span>
      </div>
      <div className="workout__details">
        <span className="workout__icon">🦶🏼</span>
        <span className="workout__value">{workout.cadence}</span>
        <span className="workout__unit">spm</span>
      </div>
    </>
  );
}
