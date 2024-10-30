import "./ToggleSwitch.css";

function ToggleSwitch({toggleDarkMode}) {
  return (
    <div className="btn-toggle-switch">
      <span className="label">Dark Mode</span>
      <label
        className="switch"
        htmlFor="darkmode-switch"
        aria-label="darkmode switch">
        <input onClick={toggleDarkMode} id="darkmode-switch" type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default ToggleSwitch;
