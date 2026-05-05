const Notification = ({message, error}) => {
  let className = error ? "error" : "notification";
  if (message === null) {
    return null;
  }

  return (
    <div className={className}>
     {message}
    </div>
  )
}

export default Notification