import React from "react";
import "./Note.css";

export default function Note({ note }) {
  return (
    <div className="note-container">
      <input className="note-title" value={note.title}></input>
      <input className="note-text" value={note.text}></input>
    </div>
  );
}
