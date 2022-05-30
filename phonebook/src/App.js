import React, { useState } from 'react'
import Note from './components/Note'
import filter from './components/filter'



const App = (props) => {
  /* const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )  */
  const { notes } = props
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const [numbers, setNumbers] = useState([
    
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [message,setMessage]=useState('')
  

  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const notep = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNoteChange2 = (event) => {
   
    setNewNumber(event.target.value)
  }

  const personToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    

  
    
    return (
    <div>
     <div>
      <h1>Phonebook</h1>

     {/*  <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}

     
      <form onSubmit={addNote}>
      name : <input value={newNumber} onChange={handleNoteChange2}/>
        <button type="submit">add</button>
      </form>   
      
      
      <form onSubmit={addNote}>
        phone number : <input value={newName} onChange={handleNoteChange}/>
        <button type="submit">add</button>
      </form>    
</div>
       
<div>
       <h1>Number</h1>
       <div>
       <ul>

        {personToShow.map(person =>
          <li>{person.name}</li> )}

          {personToShow.map(person =>
          <li>{person.number}</li> )}
  
      </ul>
   
      </div>
    </div>
    </div>
  )


}

export default App 
