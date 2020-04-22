import React from "react";
import "./Siwtch.scss";

// @ts-ignore
const Switch = ({ modeValue, handleToggle, onColor }) => {
  //if the switch is off it will be in ContactUs mode if the swit
  let isOn;
  isOn = modeValue !== "AboutUs";
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
