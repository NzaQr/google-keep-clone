import React, { useState } from "react";
import { MdDelete, MdClose } from "react-icons/md";
import Modal from "react-modal";
import "./Note.css";

export default function Note({ note, index, removeNotes }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="note-container">
        <input
          className="note-title"
          value={note.title}
          onClick={openModal}
        ></input>
        <input
          className="note-text"
          value={note.text}
          onClick={openModal}
        ></input>
      </div>

      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        className="modal"
      >
        <input className="modal-title" value={note.title}></input>
        <input className="modal-text" value={note.text}></input>
        <MdClose className="close-modal" onClick={closeModal} />

        <MdDelete className="note-delete" onClick={() => removeNotes(index)} />
      </Modal>
    </>
  );
}
