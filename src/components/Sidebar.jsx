import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/logo.png" alt="Logo" className="logo" />

      <ul className="workouts">
        <form className="form hidden">
          <div className="form__row">
            <label className="form__label">Type</label>
            <select className="form__input form__input--type">
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
            </select>
          </div>
          <div className="form__row">
            <label className="form__label">Distance</label>
            <input
              className="form__input form__input--distance"
              placeholder="km"
            />
          </div>
          <div className="form__row">
            <label className="form__label">Duration</label>
            <input
              className="form__input form__input--duration"
              placeholder="min"
            />
          </div>

          <div className="form__row">
            <label className="form__label">Cadence</label>
            <input
              className="form__input form__input--cadence"
              placeholder="step/min"
            />
          </div>
          <div className="form__row form__row--hidden">
            <label className="form__label">Elev Gain</label>
            <input
              className="form__input form__input--elevation"
              placeholder="meters"
            />
          </div>
          <button className="form__btn">OK</button>
        </form>
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
