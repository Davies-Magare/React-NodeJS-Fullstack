import {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = (props) => {
  const [search, setSearch] = useState('');
  const [allCountries, setallCountries] = useState([])
  const [countriestoShow, setCountriestoShow] = useState([]);

  useEffect(() => {
    axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => setallCountries(response.data))
  }, [])
  
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    setSearch(searchValue);
    let foundCountries = allCountries.filter(country => {
      console.log(search);
      let result = country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      return result;
    });
    setCountriestoShow(foundCountries);
    }
  

  if (allCountries === []){
    return null;
  }
  return (
    <div>
      {`find countries `}
      <input value={search} onChange={handleSearch} />
      <Countries countryList={countriestoShow} />
    </div>
  )
}

export default App