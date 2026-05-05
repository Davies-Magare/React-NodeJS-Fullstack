const Contact = (props) => {
  return (
    <p>
      {`${props.name} ${props.number} `}
      <button onClick={props.removePerson}> delete</button>
    </p>
  )
}

export default Contact