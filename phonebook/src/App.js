import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = (props) => {
  /* const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )  */
  const { notes } = props
  const [persons, setPersons] = useState([]) 
 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')
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
  
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
   
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    

  
    
    return (
    <div>

      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addNote}  newName={newName} newNumber={newNumber} 
          handlePersonChange={handlePersonChange}handleNumberChange={handleNumberChange}/>

       <h1>Number</h1>
       <Persons persons={personsToShow}/>
    </div>

  )


}

export default App 
