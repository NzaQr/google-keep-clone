import React, { useState } from "react";
import "./Form.css";
import Note from "./Note";
import Placeholder from "./Placeholder";

function Form() {
  const [showComponent, setShowComponent] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState(true);
  const [notes, setNotes] = useState([]);

  const handleClick = () => setShowComponent(true);
  const handleClose = () => setShowComponent(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !text) return;
    addNote(title, text);
    setTitle("");
    setText("");
    setShowComponent(false);
    console.log(title);
    console.log(text);
  };

  const addNote = (title, text) => {
    const newNotes = [...notes, { title, text }];
    setNotes(newNotes);
    setPlaceholder(false);
  };

  const removeNotes = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <>
      <div className="form-container">
        <form
          style={{
            boxShadow: showComponent ? "0 3px 5px rgba(0, 0, 0, 0.2)" : "",
          }}
          onSubmit={handleSubmit}
        >
          {showComponent ? (
            <input
              className="form-title"
              placeholder="Title"
              autoComplete="false"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : null}

          <input
            className="form-text"
            placeholder="Take a note..."
            onClick={handleClick}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {showComponent ? (
            <div className="form-buttons">
              <button className="submit-button" type="submit">
                Submit
              </button>
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          ) : null}
        </form>
      </div>
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
            removeNotes={removeNotes}
          />
        ))}
      </div>

      {placeholder ? <Placeholder /> : null}
    </>
  );
}

export default Form;
