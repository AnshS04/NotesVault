import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "65199e22d7f38772f1613b55",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 1",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177698658",
      "__v": 0
    },
    {
      "_id": "65199e2dd7f38772f1613b57",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 2",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177709678",
      "__v": 0
    },
    {
      "_id": "65199e22d7f38772f1613b55",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 1",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177698658",
      "__v": 0
    },
    {
      "_id": "65199e22d7f38772f1613b55",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 1",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177698658",
      "__v": 0
    },
    {
      "_id": "65199e22d7f38772f1613b55",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 1",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177698658",
      "__v": 0
    },
    {
      "_id": "65199e22d7f38772f1613b55",
      "user": "64fe00a7afeaf62b857ace11",
      "title": "Title 1",
      "description": "Random",
      "tag": "Personal",
      "date": "1696177698658",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState