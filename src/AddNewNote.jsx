import { useState } from "react";
function AddNewNote({onAddNote}) {
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");


const handleSubmit=(e)=>{
  e.preventDefault();

  if(!title || !description)return null; //if user don't enter title and description return null

    console.log(e);
    const newNote={
        title,
        description,
        id:Date.now(),
        completed:false,
        createdAt:new Date().toISOString(),
    }
    setTitle("");
    setDescription("");
    onAddNote(newNote)
    console.log(newNote);
}    

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"  className="text-field" placeholder="Note title"/>
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text"  className="text-field" placeholder="Note description"/>
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}
export default AddNewNote;
