import AddNewNote from "./AddNewNote";
import "./App.css";
import NoteList from "./NoteList";
function App() {
  const [notes,setNotes]=useState([]);
  return <div className="container">
    <div className="note-header"></div>
    <div className="note-app">
      <AddNewNote/>
      <div className="note-container">
        <NoteList/>
      </div>
    </div>
    
  </div>
}

export default App;
