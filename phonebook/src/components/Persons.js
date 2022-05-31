import React from 'react'
const Persons = ({ persons}) => {
    
    const display = () =>  persons.map((person) => 
      <div key={person.id}>
          {person.name}
          {person.number}
      </div>
    ) 
      return (
          <>
          {display()}
          </>
      )
  } 
export default Persons