import React from 'react'
import Note from './Note';
import "../index.css";

export default function NoteList({ notes }) {
  return (
    <div className='noteList'>
        {notes.map((notes)=> 
        <Note id={notes.id} text={notes.text} date={notes.date} />)}
    </div>
  )
}