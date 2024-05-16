import React from "react";

function NoteList({notes}) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NotItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NotItem({ note }) {
  
  const options={
    year:'numeric',
    month:'long',
    day:"numeric"
  }
  
    return (
    <div className="note-item">
      <div className="note-item__header">
        <div className="">
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
          <div className="actions">
            <button>❌</button>
            <input type="checkbox" name="" id="" />
          </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US",options)}
      </div>
    </div>
  );
}
