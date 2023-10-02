import React from 'react'
import { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

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
                <div className="form-check my-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote