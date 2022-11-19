import React from "react";
import Cycling from "./cycling";
import Running from "./Running";
import "./Sidebar.css";

export default function Workout(props) {
  const workout = props.workout;

  return (
    <li className="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 className="workout__title">{workout.description}</h2>
      <div className="workout__details">
        <span className="workout__icon">
          {workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"}
        </span>
        <span className="workout__value">{workout.distance}</span>
        <span className="workout__unit">km</span>
      </div>
      <div className="workout__details">
        <span className="workout__icon">⏱</span>
        <span className="workout__value">{workout.duration}</span>
        <span className="workout__unit">min</span>
      </div>
      {workout.type === "running" ? (
        <Running workout={workout} />
      ) : (
        <Cycling workout={workout} />
      )}
    </li>
  );
}
