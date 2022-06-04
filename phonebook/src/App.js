import React, { useState,useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import './index.css'
import Notification from './components/Notification'
import SO from './components/SO'
import PersonService from './service/person'


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
  const [ successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
    })
  }, [])
  console.log('render', persons.length, 'persons')

  const addNote = (event) => {
    event.preventDefault()

    const notep = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
  
  const indexPerson = persons.map(person => person.name).indexOf(newName)
  if (indexPerson > -1) { 
  
    window.confirm(`${newName} is already added, plzreplace the old number with a new one?`)
      const indexSamePerson = persons[indexPerson]
      const changedPerson = { ...indexSamePerson, id: indexSamePerson.id }

      PersonService
      .update(indexSamePerson.id, changedPerson).then(returnedNote => {
        setPersons(persons.map(person => person.id !== indexSamePerson.id ? person:{
              ...notep,
              id: returnedNote.id,
            }))
            setSuccessMessage(`Updated ${newName}`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000)
            setNewName('')
            setNewNumber('')
      })
    .catch(error => {    
        setErrorMessage(
          `Information of ${newName} was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)     
    })
  }else{


    PersonService
      .create(notep)
      .then(newPerson => {
      setPersons(persons.concat(newPerson))

      setSuccessMessage(`Added ${newName}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000)
      setNewName('')
      setNewNumber('')
  })  
  .catch(error => {
    setErrorMessage(
      ` ${error.message}`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)     
    console.log(error.response.data)
  }) 

}

  }
  const deletePerson = (id, name) => {
    if(window.confirm(`Delete ${name}?`)){
      PersonService
      .deletePerson(id)
      .then(() =>  {
        setPersons(persons.filter(person => person.id !== id) )
        console.log(newName)
        setSuccessMessage(`Information of ${name} has been removed from the server`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000)
  
      })
      .catch(error => {
  
        setErrorMessage(
          `the person '${name}' was already deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)     
        console.log(error.response.data)
        setPersons(persons.filter(n => n.id !== id))
      })
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
      <SO message={successMessage}/>
         <Notification message={errorMessage}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
    
      <PersonForm addPerson={addNote}  newName={newName} newNumber={newNumber} 
          handlePersonChange={handlePersonChange}handleNumberChange={handleNumberChange}/>

       <h1>Number</h1>
       <Persons persons={personsToShow}/>
       <Persons persons={personsToShow} removePerson={deletePerson}/>
    </div>

  )


}

export default App 
