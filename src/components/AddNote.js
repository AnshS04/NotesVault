import React from 'react'
import { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added successfully", "success")
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="form-group my-1">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} placeholder="Enter title" minLength={5} required />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange}placeholder="Description" minLength={5} required />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}placeholder="Tag" minLength={5} required />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary my-2" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote