import React, { useState } from 'react'
import Note from './components/Note'



const App = (props) => {
  /* const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )  */

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }



  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const notesToShow = showAll
    ? persons
    : persons.filter(note => note.important === true)

  return (
    <div>
      <h1>Phonebook</h1>

     {/*  <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}

     
      <form onSubmit={addNote}>
      name: <input value={newName} onChange={handleNoteChange}/>
        <button type="submit">add</button>
      </form>   

      {/* <h1>Number</h1>
      <ul>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newName} onChange={handleNoteChange}/>
        <button type="submit">add</button>
      </form>    */}
       <ul>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>


      <h1>
        Number
      </h1>
      
    </div>
  )
}
export default App 
