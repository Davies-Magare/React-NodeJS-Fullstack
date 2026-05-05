import Contact from './Contact'
const Persons = ({names, removeContact}) => {
	return (
		<div>
			{names.map((person) => 
          <Contact
              id={person.id}
              key={person.name}
              name={person.name}
              number={person.number}
              removePerson={() => removeContact(person)}
          />
      )}
		</div>
	)
}

export default Persons