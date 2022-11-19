import React from "react";
import "./Sidebar.css";

export default function Cycling(props) {
  const workout = props.workout;
  return (
    <>
      <div className="workout__details">
        <span className="workout__icon">⚡️</span>
        <span className="workout__value">{workout.speed}</span>
        <span className="workout__unit">km/h</span>
      </div>
      <div className="workout__details">
        <span className="workout__icon">⛰</span>
        <span className="workout__value">{workout.elevationGain}</span>
        <span className="workout__unit">m</span>
      </div>
    </>
  );
}
