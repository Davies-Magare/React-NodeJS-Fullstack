const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}
const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div>
      <Part name={part1.name} task={part1.exercises} />
      <Part name={part2.name} task={part2.exercises} />
      <Part name={part3.name} task={part3.exercises} />
    </div>
  )
}
const Part = ({name, task}) => {
  return (
    <p>{name}{task}</p>
  )
}
const Total = ({parts}) => {
  
  const [part1, part2, part3] = parts;
  let total = part1.exercises + part2.exercises + part3.exercises;
  
  return (
    <p>Number of exercises {total}</p>
  )
}
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

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App