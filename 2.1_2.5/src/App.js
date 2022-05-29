import React from 'react'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  const Header = (props) => {
    return (
      <h1>
          Name of the course :{props.name}
        
      </h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>
       Part1:  {course.parts[0].name}, exercises: {course.parts[0].exercises}
        </p>
        <p>
       Part2:  {course.parts[1].name}, exercises: {course.parts[1].exercises}
        </p>
        <p>
       Part3: {course.parts[2].name}, exercises: {course.parts[2].exercises}
        </p>
      
      
      </div>
    )
  }
  const Total = (props) => {

  
    const sum =course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises
    return (
      <div>
        Number of exercises: 
        <p>
        {sum}
        </p>

      </div>
    )
  }



  return (

    <div>
      <Header course={course} />
      <Content  part1={course.parts[0]} part2={course.parts[1]}part3={course.parts[2]}/>
      
      <Total  sum={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
 
    </div>
   
  )
}




export default App