import React from "react"
import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import "./index.css";


export default function App()  {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: "16/05/2022"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "19/05/2022"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "222/05/2022"
  }
])

    return (
      <div className="container">
        <NoteList notes={notes} />
      </div>
    )
  }
  
