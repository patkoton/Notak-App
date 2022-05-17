import React from 'react'
import { useState } from 'react';
import '../index.css';

export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >=0) {
            setNoteText(event.target.value);
        }
        
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText(''); 
        }
        
    }

    return (
        <div className='note newN'>
            <textarea 
                rows='8' 
                cols='10' 
                placeholder='Type your notes here...'
                value={noteText}
                onChange={handleChange}
                ></textarea>

            <div className='noteFoot'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}