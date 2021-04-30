import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => setShowComponent(true);
  const handleClose = () => setShowComponent(false);

  return (
    <div className="form-container">
      <form
        style={{
          boxShadow: showComponent ? "0 3px 5px rgba(0, 0, 0, 0.2)" : "",
        }}
      >
        {showComponent ? (
          <input
            className="note-title"
            placeholder="Title"
            autoComplete="false"
          />
        ) : null}

        <input
          className="note-text"
          placeholder="Take a note..."
          onClick={handleClick}
        />
        {showComponent ? (
          <div className="form-buttons">
            <button className="submit-button">Submit</button>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
