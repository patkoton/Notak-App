import React, { useState } from "react"
//import {nanoid} from "nanoid"
import "../index.css";



export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    //NEW>>>

    const [clicked, setClicked] = React.useState(false)
    
    const [category, setCategory] = useState('')
    const [value, setValue] = useState('')
    //END>>>

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategory(value) 
        setClicked(false)
    }

    return (
        <section className="pane sidebar">


            <div className="sidebar--header">
                <button 
                    className="first-note" 
                    onClick={() => setClicked(true)}
                >
                    Create new Category
                </button>
                {
                clicked && (
                    <>
                        <form onSubmit={() => handleSubmit} style={{position: 'absolute', top: 50}}>
                        <input placeholder="write new category" onChange={(e) => setValue(e.item.value)}/>
                        </form>
                    </>
                )
                }
            </div>

            <div>
                <ul>
                {
                  value &&  <li>{category}</li>
                }    
                </ul>
            </div>


            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
