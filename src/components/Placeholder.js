import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import "./Placeholder.css";

const Placeholder = () => {
  return (
    <div className="placeholder">
      <MdLightbulbOutline className="placeholder-icon" />
      <p className="placeholder-text">Notes you add appear here</p>
    </div>
  );
};

export default Placeholder;
