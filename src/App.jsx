import { useState } from "react";
import AddNewNote from "./AddNewNote";
import "./App.css";
import NoteList from "./NoteList";
function App() {
  const [notes,setNotes]=useState([]);

  const handleAddNote=(newNote)=>{
    setNotes(prevNotes=>[...prevNotes,newNote])
  }
  return <div className="container">
    <div className="note-header"></div>
    <div className="note-app">
      <AddNewNote onAddNote={handleAddNote}/>
      <div className="note-container">
        <NoteList notes={notes}/>
      </div>
    </div>
    
  </div>
}

export default App;
