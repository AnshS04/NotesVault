import React from 'react'
import { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
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
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} placeholder="Enter title" />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange}placeholder="Description" />
                </div>
                <div className="form-group my-1">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}placeholder="Tag" />
                </div>
                <button type="submit" className="btn btn-primary my-2" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote