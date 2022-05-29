import React from "react"


const Course = () => {
  
    const courses = {
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
         Part1:  {courses.parts[0].name}, exercises: {courses.parts[0].exercises}
          </p>
          <p>
         Part2:  {courses.parts[1].name}, exercises: {courses.parts[1].exercises}
          </p>
          <p>
         Part3: {courses.parts[2].name}, exercises: {courses.parts[2].exercises}
          </p>
        
        
        </div>
      )
    }
    const Total = (props) => {
  
    
      const sum =courses.parts[0].exercises+courses.parts[1].exercises+courses.parts[2].exercises
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
        <Header course={courses} />
        <Content  part1={courses.parts[0]} part2={courses.parts[1]}part3={courses.parts[2]}/>
        
        <Total  sum={courses.parts[0].exercises+courses.parts[1].exercises+courses.parts[2].exercises}/>
   
      </div>
     
    )
  }
  
  
  

export default Course;