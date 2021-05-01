import React from "react";
import "./Note.css";
import { MdDelete } from "react-icons/md";

export default function Note({ note, index, removeNotes }) {
  return (
    <div className="note-container">
      <input className="note-title" value={note.title}></input>
      <input className="note-text" value={note.text}></input>
      <MdDelete className="note-delete" onClick={() => removeNotes(index)} />
    </div>
  );
}
