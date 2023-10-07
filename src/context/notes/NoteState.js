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

    // logic
    const note = {
      "_id": "65199e22d7f38772f16213b556",
      "user": "64fe00a7afeaf62b857ace11",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "1696177698658",
      "__v": 0
    }
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
    console.log(json)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmZTAwYTdhZmVhZjYyYjg1N2FjZTExIn0sImlhdCI6MTY5NDQ1MDg4N30.0_tdyUUxFj-OzEN9N6EM4J1N70gbRAgRhrJP7-WF9QE"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

      // logic to edit 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState


