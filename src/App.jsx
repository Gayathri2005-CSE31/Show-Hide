import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="outer-container">
      <div className="box">
        <h1>Toggle Show / Hide Text</h1>

        {/* Toggle Switch */}
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <span className="slider"></span>
        </label>

        {/* Status Text */}
        <h3 style={{ marginTop: "15px", color: isOn ? "lightgreen" : "red" }}>
          {isOn ? "Show Text" : "Hide Text"}
        </h3>

        {isOn && (
          <div className="text-content">
            <p>Day 7 - Cybernaut Edu-tech</p>
            <p>Task - Show/Hide Text using Toggle Button</p>
            <p>It will improve my react application</p>
            <p>Full Stack Development</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;