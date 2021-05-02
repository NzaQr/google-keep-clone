import React, { useState } from "react";
import { MdDelete, MdClose } from "react-icons/md";
import Modal from "react-modal";
import "./Note.css";

export default function Note({ note, index, removeNotes }) {
  const [modal, setModal] = useState(false);
  const [mutableNote, setMutableNote] = useState(note);
  const [title, setTitle] = useState(mutableNote.title);
  const [text, setText] = useState(mutableNote.text);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(title, text);
    setTitle("");
    setText("");
  };

  const updateNote = (title, text) => {
    const newNotes = [...mutableNote, { title, text }];
    setMutableNote(newNotes);
  };

  return (
    <>
      <div className="note-container">
        <input className="note-title" value={title} onClick={openModal}></input>
        <input className="note-text" value={text} onClick={openModal}></input>
        <MdDelete className="note-delete" onClick={() => removeNotes(index)} />
      </div>

      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        className="modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            className="modal-title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <input
            className="modal-text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></input>
        </form>
        <MdClose className="close-modal" onClick={closeModal} />
      </Modal>
    </>
  );
}
