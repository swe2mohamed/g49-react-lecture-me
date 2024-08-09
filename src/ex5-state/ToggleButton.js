import React, { useState } from "react";
import PropTypes from "prop-types";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="container-fluid mt-4">
      <nav class={`navbar navbar-expand-sm ${darkMode ? "bg-dark navbar-dark" : "navbar-light bg-light"}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {darkMode ? "Dark Mode" : "Light Mode"}
            <img src={darkMode ? "logo-light.png" : "logo-dark.png"} alt="logo"></img>
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <h1>Content</h1>
        <button
          type="button"
          className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
          onClick={toggleModeHandler}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

ToggleButton.propTypes = {};

export default ToggleButton;
