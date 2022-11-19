import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { workoutactions } from "../store";
import Workout from "./workout";
export default function Sidebar() {
  const distance = useRef(null);
  const duration = useRef(null);
  const cadence = useRef(null);
  const elev = useRef(null);
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workout.workouts);

  const form = useSelector((state) => state.workout.form);
  const [type, setType] = useState("Running");

  const toggleHandler = (e) => {
    setType(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (type === "running") {
      const userWorkout = {
        id: 1,
        description: type,
        distance: distance.current.value,
        cadence: cadence.current.value,
        duration: duration.current.value,
        pace: duration.current.value / distance.current.value,
        type: type,
      };
      dispatch(workoutactions.addWorkouts(userWorkout));
    } else {
      const userWorkout = {
        id: 1,
        description: type,
        distance: distance.current.value,
        duration: duration.current.value,
        elevationGain: elev.current.value,
        speed: distance.current.value / (duration.current.value / 60),
        type: type,
      };
      dispatch(workoutactions.addWorkouts(userWorkout));
      dispatch(workoutactions.showForm());
    }
  };
  return (
    <div className="sidebar">
      <img src="/logo.png" alt="Logo" className="logo" />

      <ul className="workouts">
        {form && (
          <form onSubmit={submitHandler} className="form">
            <div className="form__row">
              <label className="form__label">Type</label>
              <select
                onChange={toggleHandler}
                className="form__input form__input--type"
              >
                <option value="running">Running</option>
                <option value="cycling">Cycling</option>
              </select>
            </div>
            <div className="form__row">
              <label className="form__label">Distance</label>
              <input
                ref={distance}
                className="form__input form__input--distance"
                placeholder="km"
              />
            </div>
            <div className="form__row">
              <label className="form__label">Duration</label>
              <input
                ref={duration}
                className="form__input form__input--duration"
                placeholder="min"
              />
            </div>

            {type === "running" ? (
              <div className="form__row">
                <label className="form__label">Cadence</label>
                <input
                  ref={cadence}
                  className="form__input form__input--cadence"
                  placeholder="step/min"
                />
              </div>
            ) : (
              <div className="form__row">
                <label className="form__label">Elev Gain</label>
                <input
                  ref={elev}
                  className="form__input form__input--elevation"
                  placeholder="meters"
                />
              </div>
            )}
            <button className="form__btn">OK</button>
          </form>
        )}
        {workouts.map((work, index) => {
          return <Workout key={index} workout={work} />;
        })}
      </ul>

      <p className="copyright">
        &copy; Copyright by{" "}
        <a
          className="twitter-link"
          target="_blank"
          href="https://twitter.com/eyuelmulugeta21"
        >
          Eyuel Mulugeta.
        </a>{" "}
        Design by Jonas Schmedtmann.
      </p>
    </div>
  );
}
