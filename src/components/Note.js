import React from 'react'
import {MdDelete} from 'react-icons/md';
import "../index.css";

export default function Note({id, text, date, handleDeleteNote }) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='noteFoot'>
            <small>{date}</small>
            <MdDelete onClick={()=> handleDeleteNote(id)} className='delete' size='1.3em'/>
        </div>
    </div>
  )
}