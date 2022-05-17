import React from "react"
import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import "./index.css";


export default function App()  {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: "05/16/2022"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "05/19/2022"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "05/22/2022"
  },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

    return (
      <div className="container">
        <NoteList notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        />
      </div>
    )
  }
  
