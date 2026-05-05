const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )

}

const Content = (props) => {
  
  return (
    <div>
      {props.parts.map((item, index) =>
        <Part key={item.id} part={item}/>)}
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((base, currentValue) =>{
    return base + currentValue.exercises;
  }, 0);
  return (
    <p>total of {total} exercises</p>
  )
}

export default Course