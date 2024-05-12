import AddNewNote from "./AddNewNote";
import "./App.css";
function App() {
  return <div className="container">
    <div className="note-header"></div>
    <div className="note-app">
      <AddNewNote/>
      <div className="note-container"></div>
    </div>
    
  </div>
}

export default App;
