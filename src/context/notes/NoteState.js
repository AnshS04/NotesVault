import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // get all notes
  const getNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmZTAwYTdhZmVhZjYyYjg1N2FjZTExIn0sImlhdCI6MTY5NDQ1MDg4N30.0_tdyUUxFj-OzEN9N6EM4J1N70gbRAgRhrJP7-WF9QE"
      }
    });
    
    const json = await response.json()
    setNotes(json)
  }

  // add a note
  const addNote = async (title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmZTAwYTdhZmVhZjYyYjg1N2FjZTExIn0sImlhdCI6MTY5NDQ1MDg4N30.0_tdyUUxFj-OzEN9N6EM4J1N70gbRAgRhrJP7-WF9QE"
      },
      body: JSON.stringify({title, description, tag}),
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // delete a note
  const deleteNote = async (id) => {
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmZTAwYTdhZmVhZjYyYjg1N2FjZTExIn0sImlhdCI6MTY5NDQ1MDg4N30.0_tdyUUxFj-OzEN9N6EM4J1N70gbRAgRhrJP7-WF9QE"
      }
    });
    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmZTAwYTdhZmVhZjYyYjg1N2FjZTExIn0sImlhdCI6MTY5NDQ1MDg4N30.0_tdyUUxFj-OzEN9N6EM4J1N70gbRAgRhrJP7-WF9QE"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
      // logic to edit 
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState


