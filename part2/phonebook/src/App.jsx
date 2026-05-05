import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'


const App = () => {
  
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  

  useEffect(() => {
    phonebookService
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, []);
  
  const addName = (event) => {
    event.preventDefault();
    const findPerson = persons.find(person => person.name === newName) || false;
    if (findPerson) {
      let userResponse = window.confirm(`${newName} is already added to Phonebook, ` +
    `replace the old number with a new one?`);
      if (userResponse){
        let updatePerson = {...findPerson, number: newNumber};
        phonebookService
        .update(findPerson.id, updatePerson)
        .then(response => {
          setPersons(persons.map(person => person.id === findPerson.id ? updatePerson : person));
        })
        .catch((error) => {
          setError(true);
          updateNotification(`Information on ${newName} has already been removed from the server`);
        })
      }
    } else {
      let newPerson = {name: newName, number: newNumber};
      phonebookService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response));
        // setNotification(`Added ${newName}`);
        // setTimeout(() => {
        //   setNotification(null);
        // }, 5000)
        updateNotification(`Added ${newName}`);
      })
    }
      setNewName('');
      setNewNumber('');
    
  }

  const updateNotification = (message) => {
    setMessage(message);
    setTimeout(() => {
      setError(false);
      setMessage(null);
      }, 5000)
  }

  const removeName = (person) => {
    event.preventDefault();
    let userResponse = window.confirm(`Delete ${person.name}?`);
    if (userResponse) {
      phonebookService
      .remove(person.id).then(response =>{
        setPersons(persons.filter(person => person.id !== response.id));
      });
    }
  }

    let toFind = searchValue.toLowerCase();
    let namesToShow = searchValue
    ? persons.filter((person) => person.name.toLowerCase().includes(toFind))
    : persons;
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={error}/>
      <Filter value={searchValue} handleSearch={(event) => setSearchValue(event.target.value)} />
      <h2>Add a new</h2>

      <PersonForm
        handleSubmit={addName} 
        newName={newName}
        handleNameChange={(event) => setNewName(event.target.value)}
        newNumber={newNumber}
        handleNumberChange={(event) => setNewNumber(event.target.value)} 
      />
      <h2>Numbers</h2>
      <Persons names={namesToShow} removeContact={removeName} />
    </div>
  )
}

export default App