import axios from 'axios'
import {useState, useEffect} from 'react'
const DescribeCountry = ({country}) => {

  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
  const currentTime = Math.floor(Date.now() / 1000); 
  const [weather, setWeather] = useState(null);
  const [iconAddress, setIconAddress] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  
  useEffect(() => {
    axios.get(baseUrl, {
        params: {
        q: country.capital,
        appid:apiKey,
        lat: country.capitalInfo.latlng[0],
        lon: country.capitalInfo.latlng[1],
        dt: currentTime
        }
      }).then(response => {
        console.log(response.data);
        setWeather(response.data);
        let iconId = response.data.weather[0].icon;
        console.log(iconId);
        setIconUrl(`https://openweathermap.org/img/wn/${iconId}@2x.png`);
      })
      
  }, [])


  if (!weather) {
    return null;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area} </p>
      <h2>Languages</h2>
      <ul>{Object.values(country.languages).map(language=>
        <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt="" />
      <h2>Weather in {country.capital}</h2>
      <p>Temperature: {(weather.main.temp - 274.15).toFixed(2)} Celcius</p>
      <img src={iconUrl} alt="" />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  )
}
export default DescribeCountry
