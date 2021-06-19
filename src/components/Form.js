import React, { useState, useEffect } from "react";
import "./Form.css";
import Placeholder from "./Placeholder";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";
import "./Note.css";

function Form() {
  const [showComponent, setShowComponent] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState([]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [modal, setModal] = useState(false);
  const [noteEditing, setNoteEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: new Date().getTime(),
      title: title,
      text: text,
      completed: false,
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setText("");
    setShowComponent(false);
  };

  function handleEditClick(id, note) {
    setModal(true);
    setNoteEditing(id);
    setCurrentNote({ ...note });
  }

  const handleEditChange = (e) => {
    const value = e.target.value;
    setCurrentNote({
      ...currentNote,
      [e.target.name]: value,
    });
  };

  const submitEdits = (id, updatedNote) => {
    const updatedItem = notes.map((note) => {
      return note.id === id ? updatedNote : note;
    });
    setModal(false);
    setNotes(updatedItem);
    setNoteEditing(null);
  };

  const handleClick = () => setShowComponent(true);
  const handleClose = () => setShowComponent(false);

  useEffect(() => {
    const json = localStorage.getItem("notes");
    const loadedNotes = JSON.parse(json);
    if (loadedNotes) {
      setNotes(loadedNotes);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
  }, [notes]);

  const removeNotes = (id) => {
    const updatedNotes = [...notes].filter((note) => note.id !== id);
    setNotes(updatedNotes);
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

          <textarea
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
        {notes.map((note) => (
          <>
            {noteEditing === note.id ? (
              <Modal
                isOpen={modal}
                onRequestClose={() => submitEdits(currentNote.id, currentNote)}
                className="modal"
              >
                <form>
                  <input
                    className="modal-title"
                    name="title"
                    value={currentNote.title}
                    onChange={handleEditChange}
                  />
                  <textarea
                    className="modal-title"
                    name="text"
                    value={currentNote.text}
                    onChange={handleEditChange}
                  />
                </form>
                <div className="modal-buttons">
                  <button
                    className="modal-done"
                    onClick={() => submitEdits(currentNote.id, currentNote)}
                  >
                    Done
                  </button>
                  <div>
                    <button
                      className="modal-close"
                      onClick={() => setNoteEditing(false)}
                    >
                      Closes
                    </button>
                    <MdDelete
                      className="note-delete"
                      onClick={() => removeNotes(note.id)}
                    />
                  </div>
                </div>
              </Modal>
            ) : (
              <div
                onClick={() => handleEditClick(note.id, note)}
                className="note-container"
              >
                {note.title === "" ? (
                  <>
                    <textarea
                      className="note-text"
                      value={note.text}
                    ></textarea>
                    <MdDelete
                      className="note-delete"
                      onClick={() => removeNotes(note.id)}
                    />
                  </>
                ) : (
                  <>
                    <input className="note-title" value={note.title}></input>
                    <textarea
                      className="note-text"
                      value={note.text}
                    ></textarea>
                    <MdDelete
                      className="note-delete"
                      onClick={() => removeNotes(note.id)}
                    />
                  </>
                )}
              </div>
            )}
          </>
        ))}
      </div>

      {notes.length > 0 ? null : <Placeholder />}
    </>
  );
}

export default Form;
