const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Part = (prop) => {
  return (
      <div>
        <p> {prop.part.name} {prop.part.exercises}</p>
      </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part part = {prop.part[0]}/>
      <Part part = {prop.part[1]}/>
      <Part part = {prop.part[2]}/>
    </div>
  )
}

const Total = (prop) => {
  return (
    <div>
      Total Numbner of Courses {prop.part[0].exercises + prop.part[1].exercises + prop.part[2].exercises}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const thepart =  [
    {name:"Fundamentals of React", exercises:10},
    {name:"Using props to pass data", exercises:7},
    {name:"State of a component", exercises:14}
  ]

  return(
    <div>
      <Header course={course}/>
      <Content part = {thepart}/>
      <Total part = {thepart}/>
    
    </div>
  )
}

export default App