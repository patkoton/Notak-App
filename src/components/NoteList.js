import React from 'react'
import Note from './Note';
import AddNote from './AddNote';
import "../index.css";

export default function NoteList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className='noteList'>
        {notes.map((notes)=> (
          <Note id={notes.id} 
              text={notes.text} 
              date={notes.date} 
              handleDeleteNote={handleDeleteNote}
            />
        ))}

        <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};