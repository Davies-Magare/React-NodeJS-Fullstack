import DescribeCountry from './DescribeCountry'
import {useState, useEffect} from 'react'


const Countries = ({countryList}) => {

  const [show, setShow] = useState(null);

  // added useEffect at the suggestion of gemini
  useEffect (() => {
    setShow(null);
  }, [countryList])

  const handleShow = (country) => {
    setShow(country);
  }

  if (countryList.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  if (countryList.length === 1)
    return <DescribeCountry country={countryList[0]} />


  if (show) {
    return (
      <div>
        <DescribeCountry country={show} />
      </div>
    )
  }
  return (
    <div>
      {countryList.map(country =>
        <p key={country.name.common}>
        {`${country.name.common} `}
        <button onClick={() => handleShow(country)}>
          show
        </button>
      </p>)}
    </div>
  )
}

export default Countries